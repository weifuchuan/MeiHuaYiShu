import * as React from 'react'
import { View, ViewStyle, WebView,Text } from 'react-native';
import { observer } from 'mobx-react/native';
import { gua } from '../../types';
import { observable } from 'mobx';

const { ListRow, Select } = require("teaset")

import qian from '../../assets/bagua/qian';
import dui from '../../assets/bagua/dui';
import li from '../../assets/bagua/li';
import zhen from '../../assets/bagua/zhen';
import xun from '../../assets/bagua/xun';
import kan from '../../assets/bagua/kan';
import geng from '../../assets/bagua/geng';
import kun from '../../assets/bagua/kun';

@observer
export default class LeiXiang extends React.Component<{ style?: ViewStyle }>{
  @observable guaWord: gua.GuaW = '乾';

  render() {
    return (
      <View style={{flex:1}}>
        <ListRow
          title={"卦："}
          topSeparator={"full"}
          bottomSeparator={"full"}
          accessory={<Select
            items={gua.words.slice(1)}
            getItemValue={(item: string) => item}
            getItemText={(item: string) => item}
            value={this.guaWord}
            pickerTitle={"起卦方式"}
            pickerType={"popover"}
            onSelected={(item: gua.GuaW) => {
              this.guaWord = item;
            }}
          />}
        />
        <WebView
          source={{ html: this.getHtmlSource(this.guaWord) }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    )
  }

  getHtmlSource(w: gua.GuaW): string {
    switch (w) {
      case "乾":
        return qian;
      case "兑":
        return dui;
      case "离":
        return li;
      case "震":
        return zhen;
      case "巽":
        return xun;
      case "坎":
        return kan;
      case "艮":
        return geng;
      case "坤":
        return kun;
      default:
        return '';
    }
  }
}
