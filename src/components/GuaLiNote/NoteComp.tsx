import * as React from 'react'
import { View, Dimensions, LayoutChangeEvent } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { quanGua2xZhiX } from '../../kit';
import { observable } from 'mobx';
import { NavigationInjectedProps } from 'react-navigation';
import { Note } from '../../types';

const { NavigationBar } = require("teaset");

const { height, width } = Dimensions.get("window")

@inject("store")
@observer
export default class NoteComp extends React.Component<NavigationInjectedProps> {
  @observable navigationBarHeight: number = 60;
  render() {
    const note = this.props.navigation.getParam("note");
    const { quanGua, datetime, time } = note;

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }} >
        <NavigationBar
          onLayout={(e: LayoutChangeEvent) => this.navigationBarHeight = e.nativeEvent.layout.height}
          title={quanGua2xZhiX(quanGua)}
          leftView={<NavigationBar.BackButton title='返回' onPress={() => this.props.navigation.goBack()} />}
          rightView={<NavigationBar.LinkButton title="保存为卦例" onPress={() => {
            if (datetime)
              this.props.navigation.push("NoteEditor", {
                note: new Note(quanGua, '', datetime ? datetime : new Date(), time)
              })
            else
              this.props.navigation.push("NoteEditor", {
                quanGua, time
              })
          }} />}
        />
        <View style={{ marginTop: this.navigationBarHeight, flex: 1, }}>

        </View>
      </View>
    )
  }
}
