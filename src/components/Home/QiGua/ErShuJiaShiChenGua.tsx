import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Store } from '../../../store';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

@inject("store")
@observer
class ErShuJiaShiChenGua extends React.Component<NavigationInjectedProps  & {
  store: Store;
}> {
  render() {
    return <View><Text>GuaLiNote</Text></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
})

export default withNavigation(ErShuJiaShiChenGua); 