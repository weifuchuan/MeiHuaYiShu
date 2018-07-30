import * as React from 'react';
import { observer } from 'mobx-react/native';
import { View, StyleSheet, ViewStyle, Dimensions, Text } from 'react-native';
import { observable, action } from 'mobx';
import { Button } from 'antd-mobile-rn';

const { Overlay } = require('teaset');

const { width, height } = Dimensions.get('window');

@observer
export default class RandomGetNumber extends React.Component<{
	onOk: (n: number) => void;
}> {
	@observable n: number = 1;

	render() {
		return (
			<Overlay.PopView style={styles.container} overlayOpacity={0.6} modal={true}>
				<View style={styles.box}>
					<Text style={{ fontSize: width * 0.1, margin: width * 0.02 }}>{this.n}</Text>
					<Button type="warning" style={{ margin: width * 0.02 }} onClick={() => this.start()}>
						开始
					</Button>
					<Button
						type="primary"
						style={{ margin: width * 0.02 }}
						onClick={() => {
							this.stop();
							this.props.onOk(this.n);
						}}
					>
						确定
					</Button>
				</View>
			</Overlay.PopView>
		);
	}

	timer?: any;

  @action
	private start = () => {
		this.timer && clearInterval(this.timer);
		this.n = RandomGetNumber.getRandomIntInclusive(1, 128);
		this.timer = setInterval(action(() => {
			this.n = RandomGetNumber.getRandomIntInclusive(1, 128);
		}), 80);
	};

	private stop = () => {
		this.timer && clearInterval(this.timer);
	};

	static getRandomIntInclusive(min: number, max: number): number /* [min, max] */ {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	} as ViewStyle,
	box: {
		backgroundColor: '#fff',
		width: width * 0.8,
		height: height * 0.6,
		alignItems: 'center',
		justifyContent: 'center'
	} as ViewStyle
});
