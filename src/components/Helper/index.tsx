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
				<Drawer
					drawerBackgroundColor={'#fff'}
					open={this.openDrawer}
					onOpenChange={(opened) => {
						this.openDrawer = opened;
					}}
					drawerWidth={width * 0.6}
					sidebar={
						<View style={{ alignItems: 'center' }}>
							<Image
								source={{ uri: meihuabase64 }}
								style={{
									width: width * 0.4,
									height: width * 0.4,
									marginTop: height * 0.04
								}}
								resizeMode={'contain'}
							/>
							<Text style={{ color: '#000000', fontSize: 20, marginBottom: height * 0.04 }}>帮助</Text>
							<FlatList
								style={{ width: width * 0.6 }}
								data={[
									{
										title: '起卦',
										route: () => {
											this.props.navigation.replace('Home');
											this.openDrawer = false;
										}
									},
									{
										title: '万物类象',
										route: () => {
											this.props.navigation.replace('LeiXiang');
											this.openDrawer = false;
										}
									},
									{
										title: '卦例笔记',
										route: () => {
											this.props.navigation.replace('GuaLiNote');
											this.openDrawer = false;
										}
									},
									{
										title: '《梅花易数》',
										route: () => {
											this.props.navigation.replace('MeiHuaYiShu');
											this.openDrawer = false;
										}
									},
									{
										title: '帮助',
										route: () => {
											this.openDrawer = false;
										}
									}
								]}
								renderItem={({ item }) => {
									return (
										<Button type="primary" style={{ borderRadius: 0 }} onClick={item.route}>
											{item.title}
										</Button>
									);
								}}
								ItemSeparatorComponent={() => <View style={{ height: height * 0.01, width: 3 }} />}
								keyExtractor={(item) => item.title}
							/>
						</View>
					}
				>
					<NavigationBar
						onLayout={(e: LayoutChangeEvent) => (this.navigationBarHeight = e.nativeEvent.layout.height)}
						title={'卦例笔记'}
						leftView={
							<TouchableOpacity
								onPress={() => {
									this.openDrawer = true;
								}}
							>
								<Image
									style={{
										height: 25,
										width: 25,
										marginLeft: 5,
										tintColor: '#fff'
									}}
									source={{ uri: menubase64 }}
								/>
							</TouchableOpacity>
						}
					/>
					<View style={{ marginTop: this.navigationBarHeight, flex: 1 }}>
						<WebView
							source={{
								html: `
									fuck
								`
							}}
						/>
					</View>
				</Drawer>
			</View>
		);
	}
}