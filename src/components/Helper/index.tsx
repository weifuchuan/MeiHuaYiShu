import React from 'react';
import { WebView, View, Dimensions, Image, Text, FlatList, LayoutChangeEvent, TouchableOpacity } from 'react-native';
import { Drawer, Button } from 'antd-mobile-rn';
import { observable } from 'mobx';
import meihuabase64 from '../../assets/ui/meihua-base64';
import { NavigationInjectedProps } from 'react-navigation';
import menubase64 from '../../assets/ui/menu-base64';
import { observer } from 'mobx-react/native';

const { NavigationBar } = require('teaset');
const { height, width } = Dimensions.get('window');

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
									<div>
										Bug、功能建议请发送到邮箱<a href="mailto:fuchuan.wei@hotmail.com">fuchuan.wei@hotmail.com</a>。
									</div>
								`
						}}
						mixedContentMode={'always'}
						dataDetectorTypes={'all'}
					/>
				</View>
			</View>
		);
	}
}
