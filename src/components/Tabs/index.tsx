import * as React from 'react';
import { View, ViewStyle, Text, TouchableOpacity, Dimensions, LayoutChangeEvent } from 'react-native';
import { observer } from 'mobx-react/native';
import { observable, action } from 'mobx';

export interface ITabsProps {
	elements: {
		title: string;
		elem: React.ReactElement<any>;
	}[];
	style?: ViewStyle;
}

@observer
export default class Tabs extends React.Component<ITabsProps> {
	@observable tabBarWidth = Dimensions.get('window').width;
	@observable contentWidth = Dimensions.get('window').width;
	@observable contentHeight = Dimensions.get('window').height;

	state = {
		currentTab: 0,
		selectedColor: '#800080',
		unselectedColor: '#000000'
	};

	render() {
		return (
			<View
				style={this.props.style ? this.props.style : {}}
				onLayout={action((e: LayoutChangeEvent) => {
					this.tabBarWidth = e.nativeEvent.layout.width;
				})}
			>
				<View style={{ flexDirection: 'row', width: this.tabBarWidth }}>
					{this.props.elements.map((e, i) => {
						return (
							<TouchableOpacity
								style={{ flex: 1, alignItems: 'center' }}
								key={i}
								onPress={() => {
									this.setState((prevState) => ({ ...prevState, currentTab: i }));
								}}
							>
								<Text
									style={{
										color:
											this.state.currentTab === i
												? this.state.selectedColor
												: this.state.unselectedColor
									}}
								>
									{e.title}
								</Text>
								<View
									style={
										this.state.currentTab === i ? (
											{
												width: this.tabBarWidth / this.props.elements.length,
												backgroundColor: this.state.selectedColor,
												height: 1
											}
										) : (
											{ height: 1 }
										)
									}
								/>
							</TouchableOpacity>
						);
					})}
				</View>
				<View
					style={{ flex: 1 }}
					onLayout={action((e:LayoutChangeEvent) => {
						this.contentHeight = e.nativeEvent.layout.height;
						this.contentWidth = e.nativeEvent.layout.width;
					})}
				>
					{this.props.elements.map((e, i) => {
						return (
							<View
								style={{
									zIndex: this.state.currentTab === i ? 100 : 0,
									position: 'absolute',
									top: 0,
									left: 0,
									height: this.contentHeight,
									width: this.contentWidth,
									backgroundColor: '#fff'
								}}
								key={i}
							>
								{e.elem}
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}
