import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle, Dimensions, LayoutChangeEvent, WebView, NativeSyntheticEvent, WebViewMessageEventData } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react/native';
import { NavigationInjectedProps } from 'react-navigation';
import editor from '../../assets/note-editor'

const QuillDeltaToHtmlConverter = require('quill-delta-to-html');
const { NavigationBar } = require("teaset");
const { height, width } = Dimensions.get("window")

@observer
export default class GuaLiNote extends React.Component<NavigationInjectedProps> {
  @observable navigationBarHeight: number = 0;
  web: WebView | null = null;
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          onLayout={(e: LayoutChangeEvent) => this.navigationBarHeight = e.nativeEvent.layout.height}
          title={"《梅花易数》"}
          leftView={<NavigationBar.BackButton title='返回' onPress={() => this.props.navigation.goBack()} />}
        />
        <View style={{ marginTop: this.navigationBarHeight, flex: 1 }}>
          <WebView
            source={{ html: editor }}
            onMessage={this.onMessage}
            ref={r => this.web = r}
            domStorageEnabled={true}
            javaScriptEnabled={true}
          />
        </View>
      </View>
    );
  }

  private onMessage = (e: NativeSyntheticEvent<WebViewMessageEventData>) => {
    const msg: {
      thing: string,
      analysis: any,
      assert: any,
    } = JSON.parse(e.nativeEvent.data);

  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  } as ViewStyle,
})
