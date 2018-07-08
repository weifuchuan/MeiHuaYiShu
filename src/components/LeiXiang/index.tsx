import * as React from 'react'
import { View, LayoutChangeEvent } from 'react-native';
import { observable } from 'mobx';
import { NavigationInjectedProps } from 'react-navigation';
import LeiXiangComponent from './LeiXiang'
import { observer } from 'mobx-react/native';

const { NavigationBar } = require("teaset");

@observer
export default class LeiXiang extends React.Component<NavigationInjectedProps>{
  @observable navigationBarHeight: number = 20;
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          onLayout={(e: LayoutChangeEvent) => {
            this.navigationBarHeight = e.nativeEvent.layout.height
          }}
          title={"万物类象"}
          leftView={<NavigationBar.BackButton title='返回' onPress={() => this.props.navigation.goBack()} />}
        />
        <View style={{ marginTop: this.navigationBarHeight, flex: 1, }}>
          <LeiXiangComponent />
        </View>
      </View>
    )
  }
}