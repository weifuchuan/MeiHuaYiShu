import * as React from 'react'
import { View, Dimensions, WebView } from 'react-native';

const { Overlay } = require("teaset")
const { width, height } = Dimensions.get("window")

export default class ModalWebView {
  static show(html: string) {
    Overlay.show((
      <Overlay.View
        style={{ alignItems: 'center', justifyContent: 'center' }}
        modal={false}
        overlayOpacity={0.6}
      >
        <View style={{ height: height * 0.8, width: width * 0.8, borderRadius: 5 }}>
          <WebView source={{ html }} />
        </View>
      </Overlay.View>
    ));
  }
}