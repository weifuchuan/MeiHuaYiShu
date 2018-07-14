import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	ViewStyle,
	Dimensions,
	LayoutChangeEvent,
	WebView,
	FlatList,
	TouchableOpacity,
	Image
} from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react/native';
import { NavigationInjectedProps } from 'react-navigation';
import { Store } from '../../store';
import { Note, FromType, GuaResult } from '../../types';
import { SwipeAction, Button, List, Drawer } from 'antd-mobile-rn';
import { quanGua2xZhiX } from '../../kit';
import { Modal } from 'antd-mobile-rn';
import meihuabase64 from '../../assets/ui/meihua-base64';
import okbase64 from '../../assets/ui/ok-base64';
import unknowbase64 from '../../assets/ui/unknow-base64';
import nobase64 from '../../assets/ui/no-base64';
import _ from 'lodash';
import menubase64 from '../../assets/ui/menu-base64'; 

const { NavigationBar } = require('teaset');
const { height, width } = Dimensions.get('window');

@inject('store')
@observer
export default class GuaLiNote extends React.Component<
	NavigationInjectedProps & {
		store: Store;
	}
> {
	@observable navigationBarHeight: number = 60;
	web: WebView | null = null;
	@observable openDrawer: any;
	render() {
		const store = this.props.store;

		return (
			<View style={styles.container}>
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
							<Text style={{ color: '#000000', fontSize: 20, marginBottom: height * 0.04 }}>梅花易数</Text>
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
											this.props.navigation.navigate('Helper');
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
						<FlatList
							data={store.notes.slice()}
							renderItem={({ item }) => {
								return (
									<NoteItem
										note={item}
										onDelete={(note) => {
											const close = Modal.alert('删除？', '删除此笔记', [
												{
													text: '删除',
													onPress: () => {
														store.deleteNote(note);
														close && close();
													}
												},
												{ text: '取消', onPress: () => close && close() }
											]);
										}}
										onClick={(note) => {
											this.props.navigation.navigate({
												routeName: 'Note',
												params: {
													note,
													from: this.props.navigation.getParam('from', FromType.list)
												},
												key: FromType.list
											});
										}}
										onResultChange={(result, note) => {
											store.changeNoteResult(note, result);
											// this.forceUpdate();
										}}
									/>
								);
							}}
							keyExtractor={(item) => item.id.toString()}
							ListHeaderComponent={
								<View style={{ alignItems: 'flex-end' }}>
									<Text style={{ color: 'gray', marginRight: 5 }}>{`准确率：${store.notes.reduce(
										(cnt, note) => (note.result !== 'unknow' ? cnt + 1 : cnt),
										0
									) === 0
										? '—'
										: _.ceil(
												store.notes.reduce(
													(cnt, note) => (note.result === 'ok' ? cnt + 1 : cnt),
													0
												) /
													store.notes.reduce(
														(cnt, note) => (note.result !== 'unknow' ? cnt + 1 : cnt),
														0
													) *
													100,
												2
											) + '%'}`}</Text>
								</View>
							}
							ListEmptyComponent={
								<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
									<Text>无</Text>
								</View>
							}
						/>
					</View>
				</Drawer>
			</View>
		);
	}
}

const ok = { source: { uri: okbase64 }, style: { tintColor: '#006400', marginRight: 5, width: 25, height: 25 } };
const unknow = {
	source: { uri: unknowbase64 },
	style: { tintColor: '#696969', marginRight: 5, width: 25, height: 25 }
};
const no = { source: { uri: nobase64 }, style: { tintColor: '#FA8072', marginRight: 5, width: 25, height: 25 } };

const NoteItem = observer(
	({
		note,
		onDelete,
		onClick,
		onResultChange
	}: {
		note: Note;
		onDelete: (note: Note) => void;
		onClick: (note: Note) => void;
		onResultChange: (r: GuaResult, note: Note) => void;
	}): React.ReactElement<any> => {
		return (
			<SwipeAction
				autoClose={true}
				left={[
					{
						text: '未果',
						onPress: () => {
							onResultChange('unknow', note);
						}
					},
					{
						text: '准确',
						onPress: () => {
							onResultChange('ok', note);
						}
					},
					{
						text: '未准',
						onPress: () => {
							onResultChange('no', note);
						}
					}
				]}
				right={[
					{
						text: '删除',
						onPress: () => {
							onDelete(note);
						},
						style: {
							backgroundColor: 'red',
							color: '#fff'
						}
					}
				]}
			>
				<List.Item
					thumb={
						<Image
							{...(note.result === 'unknow'
								? unknow
								: note.result === 'no' ? no : note.result === 'ok' ? ok : unknow)}
						/>
					}
					multipleLine={true}
					wrap
					onClick={() => onClick(note)}
				>
					{note.thing}
					<List.Item.Brief>{`${quanGua2xZhiX(
						note.quanGua
					)} | ${note.datetime.getFullYear()}-${note.datetime.getMonth() +
						1}-${note.datetime.getDate()} ${note.datetime.getHours()}:${note.datetime
						.getMinutes()
						.toString().length === 1
						? '0' + note.datetime.getMinutes()
						: note.datetime.getMinutes()}`}</List.Item.Brief>
				</List.Item>
			</SwipeAction>
		);
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	} as ViewStyle
});
