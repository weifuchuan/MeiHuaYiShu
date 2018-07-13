import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle, Dimensions, LayoutChangeEvent, Keyboard, BackHandler } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react/native';
import { NavigationInjectedProps } from 'react-navigation';
import { Store } from '../../store';
import { quanGua2xZhiX } from '../../kit';
import { gua, Note, FromType } from '../../types';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { InputItem, Modal, Toast, ActivityIndicator } from 'antd-mobile-rn';
import Tabs from '../Tabs';
import { G } from '../Gua';
import LeiXiang from '../LeiXiang/LeiXiang';
import QuillEditor from '../QuillEditor';
const { NavigationBar } = require('teaset');
const { width } = Dimensions.get('window');

@inject('store')
@observer
export default class NoteEditor extends React.Component<
	NavigationInjectedProps & {
		store: Store;
	},
	{
		tabViewNavigationState: {
			index: number;
			routes: { key: string; title: string }[];
		};
	}
> {
	@observable navigationBarHeight: number = 60;

	state = {
		tabViewNavigationState: {
			index: 0,
			routes: [
				{ key: 'leiXiang', title: '类象' },
				{ key: 'zhuGua', title: '主卦' },
				{ key: 'huGua', title: '互卦' },
				{ key: 'bianGua', title: '变卦' }
			]
		}
	};
	webViewQuillEditor: any;
	@observable saving: boolean = false;
	editor: QuillEditor | null = null;

	render() {
		const navigation = this.props.navigation;
		const note: Note = navigation.getParam('note');
		const quanGua = note.quanGua;
		const datetime = note.datetime;
		const { hasShiZhi, shiZhi: { gzYear, gzMonth, gzDay, gzHour }, zhuGua, huGua, bianGua } = note.help();

		return (
			<View style={styles.container}>
				<NavigationBar
					onLayout={(e: LayoutChangeEvent) => (this.navigationBarHeight = e.nativeEvent.layout.height)}
					title={quanGua2xZhiX(quanGua)}
					leftView={<NavigationBar.BackButton title="返回" onPress={this.back} />}
					rightView={
						<NavigationBar.LinkButton
							title={'保存'}
							onPress={async () => {
								Keyboard.dismiss();
								if (note.thing.trim()) {
									this.saving = true;
									// note.content = (await this.getContent()).delta;
									note.content = await this.editor!.getText(); 
									try {
										await this.props.store.saveNote(note);
									} catch (err) {
										console.error(err);
									}
									this.saving = false;
									this.props.navigation.navigate('Note', {
										note,
										from: this.props.navigation.getParam('from', FromType.list)
									});
								} else {
									Toast.fail('请输入“问事”');
								}
							}}
						/>
					}
				/>
				<View style={{ marginTop: this.navigationBarHeight, flex: 1 }}>
					<View style={{ width, flexDirection: 'row', justifyContent: 'space-around' }}>
						<View style={{ flexDirection: 'row', padding: 5 }}>
							<View style={{ marginRight: 5 }}>
								<Text style={{ marginBottom: 5 }}>
									{gua.signs[gua.words.indexOf(zhuGua.pailie.up as gua.GuaW)]}
								</Text>
								<Text>{gua.signs[gua.words.indexOf(zhuGua.pailie.bottom as gua.GuaW)]}</Text>
							</View>
							<View style={{ marginRight: 5 }}>
								<Text style={{ marginBottom: 5 }}>
									{gua.signs[gua.words.indexOf(huGua.pailie.up as gua.GuaW)]}
								</Text>
								<Text>{gua.signs[gua.words.indexOf(huGua.pailie.bottom as gua.GuaW)]}</Text>
							</View>
							<View>
								<Text style={{ marginBottom: 5 }}>
									{gua.signs[gua.words.indexOf(bianGua.pailie.up as gua.GuaW)]}
								</Text>
								<Text>{gua.signs[gua.words.indexOf(bianGua.pailie.bottom as gua.GuaW)]}</Text>
							</View>
						</View>
						<View style={{ padding: 5 }}>
							<Text style={{ marginBottom: 5 }}>{`${datetime.getFullYear()}-${datetime.getMonth() +
								1}-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes().toString()
								.length === 1
								? '0' + datetime.getMinutes()
								: datetime.getMinutes()}`}</Text>
							<Text>
								{hasShiZhi ? (
									`${gzYear}, ${gzMonth}, ${gzDay}, ${gzHour}`
								) : (
									`${gua.diZhi[note.time[0] - 1]}年, ${note.time[1]}月, ${note.time[2]}日, ${gua.diZhi[
										note.time[3] - 1
									]}时`
								)}
							</Text>
						</View>
					</View>
					<Tabs
						style={{ flex: 1 }}
						elements={[
							{
								title: '编辑',
								elem: (
									<View style={{ flex: 1 }}>
										<InputItem value={note.thing} onChangeText={(t) => (note.thing = t)}>
											问事：
										</InputItem>
										<QuillEditor ref={(r) => (this.editor = r)} />
									</View>
								)
							},
							{
								title: '资料',
								elem: (
									<View style={{ flex: 1 }}>
										<TabView
											navigationState={this.state.tabViewNavigationState}
											onIndexChange={(i) => {
												this.setState((prev) => ({
													tabViewNavigationState: {
														...prev.tabViewNavigationState,
														index: i
													}
												}));
											}}
											renderScene={SceneMap({
												zhuGua: () => G(zhuGua),
												huGua: () => G(huGua),
												bianGua: () => G(bianGua),
												leiXiang: LeiXiang
											})}
											renderTabBar={(props) => (
												<TabBar
													{...props}
													indicatorStyle={{ backgroundColor: 'blue' }}
													style={{ backgroundColor: '#fff' }}
													renderLabel={(params) => (
														<Text style={{ color: '#000' }}>
															{(params.route as any).title}
														</Text>
													)}                   
												/>
											)}
										/>
									</View>
								)
							}
						]}
					/>
				</View>
				<ActivityIndicator toast text="保存中..." animating={this.saving} />
			</View>
		);
	}

	private lastResolve: (value?: any) => void = () => null;

	private getDeltaCallback = (d: any) => {
		this.lastResolve(d);
	};

	private getContent = (): Promise<any> => {
		return new Promise<any>((resolve) => {
			this.lastResolve = resolve;
			this.webViewQuillEditor.getDelta();
		});
	};

	private back = () => {
		const modal = Modal.alert('放弃编辑？', '返回将放弃编辑好的内容', [
			{
				text: '返回',
				onPress: () => {
					this.props.navigation.goBack();
				}
			},
			{
				text: '取消',
				onPress: () => {
					modal && modal();
				}
			}
		]);
		return true;
	};

	componentDidMount() {
		const note: Note = this.props.navigation.getParam('note');
		this.editor!.setText(note.content);
		BackHandler.addEventListener('hardwareBackPress', this.back);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.back);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	} as ViewStyle
});
