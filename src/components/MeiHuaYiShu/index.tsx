import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, LayoutChangeEvent, WebView, Dimensions } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react/native';
import { NavigationInjectedProps } from 'react-navigation';
import book from '../../assets/meiHuaYiShuBookHTML'

const { NavigationBar } = require("teaset");
const { height, width } = Dimensions.get("window")

@observer
export default class MeiHuaYiShu extends React.Component<NavigationInjectedProps> {
  @observable navigationBarHeight = 0;
  @observable webViewHeight = 0;
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          onLayout={(e: LayoutChangeEvent) => this.navigationBarHeight = e.nativeEvent.layout.height}
          title={"《梅花易数》"}
          leftView={<NavigationBar.BackButton title='返回' onPress={() => this.props.navigation.goBack()} />}
        />
        <View style={{ marginTop: this.navigationBarHeight,flex:1 }} onLayout={e => {
          this.webViewHeight = e.nativeEvent.layout.height;
        }}>
          <WebView
            source={{ html: book,baseUrl:"index.html" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle
})