import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { withRouter, RouteComponentProps } from 'react-router';
import { Store } from '../../../store';

@inject("store")
@observer
class ErShuGua extends React.Component<RouteComponentProps<any> & {
  store: Store;
}> {
  render() {
    return <View><Text>ErShuGua</Text></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
})

export default withRouter(ErShuGua); 