import React from 'react';
import { WebView, View, Dimensions, LayoutChangeEvent } from 'react-native';
import { observable } from 'mobx';
import { NavigationInjectedProps } from 'react-navigation';
import { observer } from 'mobx-react/native';

const { NavigationBar } = require('teaset');

@observer
export default class Helper extends React.Component<NavigationInjectedProps> {
	@observable navigationBarHeight: number = 60;
	@observable openDrawer: boolean = false;
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<NavigationBar
					onLayout={(e: LayoutChangeEvent) => (this.navigationBarHeight = e.nativeEvent.layout.height)}
					title={'帮助'}
					leftView={<NavigationBar.BackButton title="返回" onPress={() => this.props.navigation.goBack()} />}
				/>
				<View style={{ marginTop: this.navigationBarHeight, flex: 1 }}>
					<WebView
						source={{
							html: `
							<!DOCTYPE html>
							<html>
								<head>
										<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
								</head>
								<body>
									<div>
										Bug、功能建议请发送到邮箱<a href="mailto:fuchuan.wei@hotmail.com">fuchuan.wei@hotmail.com</a>。
									</div>
								</body>
							</html>
								`
								, baseUrl: ''
						}}
						
						mixedContentMode={'always'}
						dataDetectorTypes={'all'}
					/>
				</View>
			</View>
		);
	}
}
