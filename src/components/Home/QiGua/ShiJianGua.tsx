import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, Image, ImageStyle, TouchableOpacity, Dimensions } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Switch, Button } from 'antd-mobile-rn'
import { Store } from '../../../store';
import { observable } from 'mobx';
import SunTime from './SunTime';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

const { ListRow, Overlay, Label } = require("teaset")

const { width, height } = Dimensions.get("window")

@inject("store")
@observer
class ShiJianGua extends React.Component<NavigationInjectedProps  & {
  store: Store;
}> {
  @observable useSunTime: boolean = true;

  render() {
    return (
      <View style={styles.container}>
        <SunTime use={this.useSunTime} onChange={v => this.useSunTime = v} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
})

export default withNavigation(ShiJianGua); 