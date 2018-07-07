import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Store } from '../../../store';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { List, InputItem } from 'antd-mobile-rn';
import { observable } from 'mobx';
import RandomGetNumber from './RandomGetNumber';

const { Overlay } = require("teaset")

@inject("store")
@observer
class ErShuGua extends React.Component<NavigationInjectedProps & {
  store: Store;
}> {
  @observable up: number = 0;
  @observable bottom: number = 0;

  overlay: any;

  render() {
    return (
      <View style={styles.container}>
        <List>
          <InputItem
            type={'number'}
            value={this.up.toString()}
            extra={<Text style={{ color: "blue" }}>随机取数</Text>}
            onExtraClick={() => {
              this.overlay = Overlay.show(<RandomGetNumber onOk={n => {this.up = n;Overlay.hide(this.overlay)}} />)
            }}
            onChange={v => {
              const result = v.match(/\d+/);
              if (result) {
                this.up = Number.parseInt(result[0]);
              } else {
                this.up = 0;
              }
            }}
          >
            <Text>上卦用数：</Text>
          </InputItem>
          <InputItem
            type={'number'}
            value={this.bottom.toString()}
            extra={<Text style={{ color: "blue" }}>随机取数</Text>}
            onExtraClick={() => {
              this.overlay = Overlay.show(<RandomGetNumber onOk={n => { this.bottom = n; Overlay.hide(this.overlay) }} />)
            }}
            onChange={v => {
              const result = v.match(/\d+/);
              if (result) {
                this.bottom = Number.parseInt(result[0]);
              } else {
                this.bottom = 0;
              }
            }}
          >
            <Text>下卦用数：</Text>
          </InputItem>
        </List>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
})

export default withNavigation(ErShuGua); 