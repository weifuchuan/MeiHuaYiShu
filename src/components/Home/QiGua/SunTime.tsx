import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle, Image, ImageStyle, TouchableOpacity, Dimensions } from 'react-native';
import { observer } from 'mobx-react/native';
import { Switch, Picker, List } from 'antd-mobile-rn';
import { observable, action } from 'mobx';
import { sunTimeByLongtitude } from '../../../kit';
import { data as provinces } from '../../../assets/longitude';
import { storage, fixedKey } from '../../../store';
import helpbase64 from '../../../assets/ui/help-base64';

const { ListRow, Overlay } = require('teaset');

const { width, height } = Dimensions.get('window');

interface UseableForSelect {
	value: string;
	label: string;
	children?: UseableForSelect[];
}

const data: UseableForSelect[] = provinces.map((p) => ({
	label: p.name,
	value: p.name,
	children: p.city.map((c) => ({
		label: c.name,
		value: c.name,
		children: c.district.map((d) => ({
			label: d.name,
			value: d.name
		}))
	}))
}));

export interface ISunTime {
	getNow(): Date;
}

@observer
export default class SunTime extends React.Component<{
	onChange: (use: boolean) => void;
	sync: () => void;
}> implements ISunTime {
	@observable use: boolean = true;

	@observable now: string = '(尝试获取经度)';

	@observable currentPosition: [string, string, string] = [ '北京', '北京市', '东城区' ];

	constructor(props: Readonly<{ use: boolean; onChange: (use: boolean) => void; sync: () => void }>) {
		super(props);
		storage
			.load<[string, string, string]>({ key: fixedKey.CURRENT_POSITION })
			.then((p) => {
				this.currentPosition = p;
				this.startSunTimeUpdator();
				this.props.sync();
			})
			
	}

	render() {
		return (
			<View>
				<ListRow
					title={
						<View style={styles.useSunTime}>
							<Text>使用真太阳时：</Text>
							<TouchableOpacity onPress={this.showSunTimeHelp}>
								<Image source={{ uri: helpbase64 }} style={styles.help} resizeMode={'contain'} />
							</TouchableOpacity>
						</View>
					}
					topSeparator={'full'}
					bottomSeparator={'full'}
					accessory={
						<Switch
							checked={this.use}
							onChange={action((ok:boolean) => {
								this.use = ok;
								this.props.onChange(ok);
								!ok && this.timer && clearInterval(this.timer);
								const now = this.getNow();
								this.now = `${now.getFullYear()}-${now.getMonth() +
									1}-${now.getDate()} ${now.getHours()}:${now.getMinutes().toString().length === 1
									? '0' + now.getMinutes()
									: now.getMinutes()}`;
								this.props.sync();
							})}
						/>
					}
				/>
				{this.use ? (
					<ListRow
						title={
							<View style={{ flexDirection: 'row' }}>
								<Text>现在（真太阳时）：</Text>
							</View>
						}
						topSeparator={'full'}
						bottomSeparator={'full'}
						accessory={<Text onPress={() => this.props.sync()}>{this.now}</Text>}
						detail={'点击同步→'}
					/>
				) : null}
				{this.use ? (
					<Picker
						title={<Text>省/市/区(县)</Text>}
						data={data}
						cols={3}
						extra={`${this.currentPosition[0]}/${this.currentPosition[1]}/${this.currentPosition[2]}`}
						value={this.currentPosition.slice()}
						onChange={(v) => {
							this.currentPosition[0] = v![0] as string;
							this.currentPosition[1] = v![1] as string;
							this.currentPosition[2] = v![2] as string;
						}}
						onOk={(v) => {
							this.currentPosition[0] = v![0] as string;
							this.currentPosition[1] = v![1] as string;
							this.currentPosition[2] = v![2] as string;
							storage.save({ key: fixedKey.CURRENT_POSITION, data: this.currentPosition.slice() });
							this.startSunTimeUpdator();
							this.props.onChange(true);
						}}
					>
						<List.Item arrow="horizontal">
							<Text>省/市/区(县)：</Text>
						</List.Item>
					</Picker>
				) : null}
			</View>
		);
	}

	getNow(): Date {
		if (this.use) {
			const lng = provinces.find((p) => p.name === this.currentPosition[0])!.city.find(
				(c) => c.name === this.currentPosition[1]
			)!.district.find((d) => d.name === this.currentPosition[2])!.longitude;
			return sunTimeByLongtitude(lng);
		} else {
			return new Date();
		}
	}

	timer: any = null;

	componentDidMount() {}

	@action
	private startSunTimeUpdator = () => {
		this.timer && clearInterval(this.timer);
		const lng = provinces.find((p) => p.name === this.currentPosition[0])!.city.find(
			(c) => c.name === this.currentPosition[1]
		)!.district.find((d) => d.name === this.currentPosition[2])!.longitude;
		const now = sunTimeByLongtitude(lng);
		this.now = `${now.getFullYear()}-${now.getMonth() +
			1}-${now.getDate()} ${now.getHours()}:${now.getMinutes().toString().length === 1
			? '0' + now.getMinutes()
			: now.getMinutes()}`;
		this.timer = setInterval(action(() => {
			const now = sunTimeByLongtitude(lng);
			this.now = `${now.getFullYear()}-${now.getMonth() +
				1}-${now.getDate()} ${now.getHours()}:${now.getMinutes().toString().length === 1
				? '0' + now.getMinutes()
				: now.getMinutes()}`;
			this.props.onChange(this.use);
		}), 30000);
	};

	componentWillUnmount() {
		this.timer && clearInterval(this.timer);
	}

	private static sunTimeHelpOverlayView = (
		<Overlay.PopView style={{ alignItems: 'center', justifyContent: 'center' }}>
			<View
				style={{
					backgroundColor: '#fff',
					width: width * 0.8,
					minHeight: height * 0.4,
					borderRadius: 15,
					justifyContent: 'center',
					alignItems: 'center',
					padding: 20
				}}
			>
				<Text numberOfLines={1000} style={{ fontSize: 20 }}>
					按照地理学公式，根据经度计算得到的当地“真太阳时”，即古人通过日晷得到的、太阳相对于当地的时辰。
				</Text>
			</View>
		</Overlay.PopView>
	);

	private showSunTimeHelp = () => {
		Overlay.show(SunTime.sunTimeHelpOverlayView);
	};
}

const styles = StyleSheet.create({
	useSunTime: {
		flexDirection: 'row',
		alignItems: 'center'
	} as ViewStyle,
	help: {
		tintColor: '#DA70D6',
		width: 15,
		height: 15
	} as ImageStyle
});
