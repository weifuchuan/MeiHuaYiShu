import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Store } from '../../../store';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { List, InputItem, Picker, DatePicker, Button, Card } from 'antd-mobile-rn';
import { observable } from 'mobx';
import RandomGetNumber from './RandomGetNumber';
import nongLiUseableData from './nongLiUseableData';
import { gua } from '../../../types';
import { qiGuaByTwoNumber } from '../../../kit';
import SunTime from './SunTime';
import ModalKit from '../../ModalKit';

const solarLunar = require('../../../assets/solarlunar.min.js');
const { Overlay } = require('teaset');

@inject('store')
@observer
class ErShuGua extends React.Component<
	NavigationInjectedProps & {
		store: Store;
	}
> {
	@observable up: number = 0;
	@observable bottom: number = 0;
	@observable useNongLi: boolean = false;
	@observable timeForGua: [string, string, string, string] = this.solar2timeForGua(new Date());
	@observable now: Date = new Date();

	overlay: any;
	sunTime?: SunTime;
	useSunTime: boolean = false;

	render() {
		return (
			<View style={styles.container}>
				<List>
					<InputItem
						type={'number'}
						value={this.up.toString()}
						extra={<Text style={{ color: 'blue' }}>随机取数</Text>}
						onExtraClick={() => {
							this.overlay = Overlay.show(
								<RandomGetNumber
									onOk={(n) => {
										this.up = n;
										Overlay.hide(this.overlay);
									}}
								/>
							);
						}}
						onChange={(v) => {
							const result = v.match(/\d+/);
							if (result) {
								this.up = Number.parseInt(result[0]);
							} else {
								this.up = 0;
							}
						}}
					>
						<Text>上卦用数：</Text>
					</InputItem>
					<InputItem
						type={'number'}
						value={this.bottom.toString()}
						extra={<Text style={{ color: 'blue' }}>随机取数</Text>}
						onExtraClick={() => {
							this.overlay = Overlay.show(
								<RandomGetNumber
									onOk={(n) => {
										this.bottom = n;
										Overlay.hide(this.overlay);
									}}
								/>
							);
						}}
						onChange={(v) => {
							const result = v.match(/\d+/);
							if (result) {
								this.bottom = Number.parseInt(result[0]);
							} else {
								this.bottom = 0;
							}
						}}
					>
						<Text>下卦用数：</Text>
					</InputItem>
					<SunTime
						ref={(r) => (this.sunTime = r!)}
						onChange={(v) => {
							this.useSunTime = v;
						}}
						sync={() => {
							this.updateTimeForGua();
							this.forceUpdate();
						}}
					/>
					{this.useNongLi ? (
						<Picker
							data={nongLiUseableData}
							value={this.timeForGua.slice()}
							cols={4}
							onChange={(t) => {
								(this as any).timeForGua = t!;
							}}
							onOk={(t) => {
								(this as any).timeForGua = t!;
							}}
						>
							<List.Item arrow="horizontal">
								<View style={{ flexDirection: 'row' }}>
									<Text>起卦时间(不入卦)：</Text>
									<Text style={{ color: 'blue' }} onPress={() => (this.useNongLi = false)}>
										转公历
									</Text>
								</View>
							</List.Item>
						</Picker>
					) : (
						<DatePicker
							mode={'datetime'}
							value={this.now}
							onChange={(d) => {
								this.now = d;
								(this as any).timeForGua = this.solar2timeForGua(this.now);
							}}
							title={'选择时间'}
						>
							<List.Item arrow="horizontal">
								<View style={{ flexDirection: 'row' }}>
									<Text>起卦时间(不入卦)：</Text>
									<Text style={{ color: 'blue' }} onPress={() => (this.useNongLi = true)}>
										转农历
									</Text>
								</View>
							</List.Item>
						</DatePicker>
					)}
				</List>
				<Button type={'primary'} style={{ borderRadius: 0 }} onClick={this.qiGua}>
					起卦
				</Button>
				<Card full={true} style={{ flex: 1 }}>
					<Card.Header
						title={'二数卦卦例'}
						extra={
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									onPress={() => {
										// ModalWebView.show(guali);
										ModalKit.show(guali);
									}}
								>
									全屏
								</Text>
							</View>
						}
					/>
					<Card.Body>
						{/* <WebView
							source={{
								html: guali
							}}
            /> */}
						<View style={{ flex: 1, padding: 5 }}>{guali}</View>
					</Card.Body>
				</Card>
			</View>
		);
	}

	private qiGua = () => {
		const qg = qiGuaByTwoNumber(this.up, this.bottom);
		const time = this.timeForGua.map((s, i) => (i === 0 ? Number.parseInt(s.split('-')[1]) : Number.parseInt(s)));
		if (this.useNongLi)
			this.props.navigation.navigate('Gua', {
				gua: qg,
				time: time
			});
		else
			this.props.navigation.navigate('Gua', {
				gua: qg,
				time: time,
				datetime: this.now
			});
	};

	private solar2timeForGua(date: Date): [string, string, string, string] {
		const { gzYear, lMonth, lDay }: { gzYear: string; lMonth: number; lDay: number } = solarLunar.solar2lunar(
			date.getFullYear(),
			date.getMonth() + 1,
			date.getDate()
		);
		const lYear = gua.diZhi.findIndex((d) => d === gzYear[1]) + 1;
		let lHour = date.getHours() + 1;
		lHour = lHour === 24 ? 0 : lHour;
		lHour = lHour % 2 === 0 ? lHour : lHour - 1;
		lHour = lHour / 2 + 1;
		return [
			gua.tianGan.findIndex((t) => t === gzYear[0]) + 1 + '-' + lYear,
			lMonth.toString(),
			lDay.toString(),
			lHour.toString()
		];
	}

	private updateTimeForGua() {
		this.now = this.sunTime!.getNow();
		(this as any).timeForGua = this.solar2timeForGua(this.now);
	}

	backCount = 0;
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	} as ViewStyle
});

export default withNavigation(ErShuGua);


const guali = (
	<ScrollView>
		<View style={{ alignItems: 'center' }}>
			<Text style={{ fontSize: 22 }} selectable={true}>
				今日动静如何
			</Text>
		</View>

		<Text style={{ fontSize: 18 }} selectable={true}>
			有客问曰：“今日动静如何？”逐将此六字占之。以乎分“今日动”三字为上卦。“今”平声，一数；“日”入声，四数；“动”去声，三数，共八数，得坤为上卦。以“静如何”为下卦，“静”去声，三数；“如”平声，一数；“何”平声，一数，共五数，得巽，为下卦。又以八五总为十三数，除二六一十二，余得一数，为地风升。初爻动，变泰卦，互见震、兑。逐为客曰：“今日有人相请，客不多，酒不醉，味至黍鸡而已。”至晚果然。
		</Text>
		<Text style={{ fontSize: 18 }} selectable={true}>
			断曰：“升者，有升阶之义，互震、兑，有东西席之分。卦中兑为口，坤为腹，为口腹之事，故知有人相请。客不多者，坤土独立，无同类之卦气也。酒不醉，卦中无坎。味止黍鸡者，坤为黍稷耳。盖卦无相生之义，故知酒不多，食品不丰也。”（系声音占例）
		</Text>

		<View style={{ alignItems: 'center' }}>
			<Text style={{ fontSize: 22 }} selectable={true}>
				西林寺牌额占
			</Text>
		</View>

		<Text style={{ fontSize: 18 }} selectable={true}>
			先生偶见西林寺之额，“林”字无两勾，因占之，以西字七画为艮，作上卦；以林八画为坤，作下卦。以上七画下八画总十五画，除二六一十二，余数得三，是山地剥卦。第三爻动，变艮，互见重坤。
		</Text>
		<Text style={{ fontSize: 18 }} selectable={true}>
			断曰：寺者，纯陽之所居，今卦得重陰之爻，而又有群陰剥陽之兆。详此，则寺中当有陰人之祸。询之果然，逐谓寺僧曰：“何不添‘林’字两勾，则自然无陰人之祸矣。”僧信然，即添‘林’字两勾，寺果无事。
		</Text>
		<Text style={{ fontSize: 18 }} selectable={true}>
			又，纯陽之人，所居得纯陰之卦，故不吉。又有群陰剥陽之义，故有陰人之祸。若添“林”字两勾，则十画，除八得二为兑卦，合上艮，是为山泽损。第五爻变，动为中孚卦，互卦见坤、震，损者益之，用互俱生体，为吉卦。可以得安矣。
		</Text>
	</ScrollView>
);
