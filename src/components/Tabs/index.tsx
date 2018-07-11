import * as React from 'react'
import { View, ViewStyle, Text, TouchableOpacity } from 'react-native';

export interface ITabsProps {
  elements: {
    title: string;
    elem: React.ReactElement<any>;
  }[];
  style?: ViewStyle;
}

export default class Tabs extends React.Component<ITabsProps>{

  state = {
    currentTab: 0,
    tabBarWidth: 0,
    selectedColor: "#800080",
    unselectedColor: "#000000",
  }

  render() {
    return (
      <View style={this.props.style ? this.props.style : {}} onLayout={e => {
        this.setState(prev => ({ ...prev, tabBarWidth: e.nativeEvent.layout.width }))
      }} >
        <View style={{ flexDirection: "row", width: this.state.tabBarWidth, }}  >
          {
            this.props.elements.map((e, i) => {
              return (
                <TouchableOpacity style={{ flex: 1, alignItems: "center" }} key={i} onPress={() => {
                  this.setState((prevState) => ({ ...prevState, currentTab: i }))
                }} >
                  <Text
                    style={{ color: this.state.currentTab === i ? this.state.selectedColor : this.state.unselectedColor }}
                  >{e.title}</Text>
                  <View
                    style={this.state.currentTab === i
                      ? {
                        width: this.state.tabBarWidth / this.props.elements.length,
                        backgroundColor: this.state.selectedColor
                      }
                      : {}}
                  />
                </TouchableOpacity>
              )
            })
          }
        </View>
        {
          this.props.elements[this.state.currentTab].elem
        }
      </View>
    )
  }

}