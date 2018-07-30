import * as React from 'react';
import { View, Dimensions, LayoutChangeEvent, Text, BackHandler } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { quanGua2xZhiX } from '../../kit';
import { observable, toJS, action } from 'mobx';
import { NavigationInjectedProps } from 'react-navigation';
import { Note, gua, FromType } from '../../types';
import { ZhenGua, G } from '../Gua';
import { List } from 'antd-mobile-rn';
import Tabs from '../Tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LeiXiang from '../LeiXiang/LeiXiang';
import QuillViewer from '../QuillViewer';

const { NavigationBar } = require('teaset');
const { width } = Dimensions.get('window');

@inject('store')
@observer
export default class NoteComp extends React.Component<NavigationInjectedProps> {
	@observable navigationBarHeight: number = 60;
	webViewQuillViewer: any;
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
	render() {
		const note: Note = this.props.navigation.getParam('note');
		const { quanGua, datetime, time } = note;
		const { hasShiZhi, shiZhi: { gzYear, gzMonth, gzDay, gzHour }, zhuGua, huGua, bianGua } = note.help();
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<NavigationBar
					onLayout={action((e: LayoutChangeEvent) => (this.navigationBarHeight = e.nativeEvent.layout.height))}
					title={quanGua2xZhiX(quanGua)}
					leftView={<NavigationBar.BackButton title="返回" onPress={this.back} />}
					rightView={
						<NavigationBar.LinkButton
							title="编辑"
							onPress={() => {
								this.props.navigation.navigate('NoteEditor', {
									note
								});
								this.props.navigation.navigate({
									routeName: 'NoteEditor',
									params: {
										note,
										from: this.props.navigation.getParam('from')
									}
								});
							}}
						/>
					}
				/>
				<View style={{ marginTop: this.navigationBarHeight, flex: 1 }}>
					<View style={{ width, alignItems: 'center' }}>
						<ZhenGua qg={quanGua} style={{ marginTop: 10 }} />
						{hasShiZhi ? (
							<Text selectable={true} style={{ marginTop: 10 }}>
								{gzYear}, {gzMonth}, {gzDay}, {gzHour} /{' '}
								{`${datetime.getFullYear()}-${datetime.getMonth() +
									1}-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes().toString()
									.length === 1
									? '0' + datetime.getMinutes()
									: datetime.getMinutes()}`}
							</Text>
						) : (
							<Text selectable={true}>{`${gua.diZhi[time[0] - 1]}年, ${time[1]}月, ${time[2]}日, ${gua.diZhi[
								time[3] - 1
							]}时`}</Text>
						)}
					</View>
					<List.Item wrap multipleLine={true}>{`问事：${note.thing}`}</List.Item>
					<Tabs
						style={{ flex: 1 }}
						elements={[
							{
								title: '笔记',
								elem: (
									<View style={{ flex: 1 }}>
										<QuillViewer text={toJS(note.content)} />
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
														...(prev as any).tabViewNavigationState,
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
			</View>
		);
	}

	private back = () => {
		switch (this.props.navigation.getParam('from')) {
			case FromType.gua:
				this.props.navigation.goBack(FromType.gua);
				break;
			case FromType.list:
				this.props.navigation.goBack(FromType.list);
				break;
			default:
				this.props.navigation.goBack();
				break;
		}
		return true;
	};

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.back);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.back);
	}
}
