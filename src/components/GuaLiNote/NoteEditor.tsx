import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle, Dimensions, LayoutChangeEvent, WebView, NativeSyntheticEvent, WebViewMessageEventData } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react/native';
import { NavigationInjectedProps } from 'react-navigation';

const { WebViewQuillEditor, WebViewQuillViewer } = require('react-native-webview-quilljs');
const QuillDeltaToHtmlConverter = require('quill-delta-to-html');
const { NavigationBar } = require("teaset");
const { height, width } = Dimensions.get("window")

interface RespMsg {
  thing: string,
  analysis: any,
  assert: any,
  result: any,
}

@observer
export default class NoteEditor extends React.Component<NavigationInjectedProps> {
  @observable navigationBarHeight: number = 0;
  
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          onLayout={(e: LayoutChangeEvent) => this.navigationBarHeight = e.nativeEvent.layout.height}
          title={"《梅花易数》"}
          leftView={<NavigationBar.BackButton title='返回' onPress={() => this.props.navigation.goBack()} />}
          rightView={<NavigationBar.LinkButton title={"保存"} onPress={async () => {

          }} />}
        />
        <View style={{ marginTop: this.navigationBarHeight, flex: 1 }}>
          <View>
            
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  } as ViewStyle,
})
