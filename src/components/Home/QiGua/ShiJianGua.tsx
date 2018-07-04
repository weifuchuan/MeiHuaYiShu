import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, Image, ImageStyle, TouchableOpacity, Dimensions } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { withRouter, RouteComponentProps } from 'react-router';
import { Switch, Button } from 'antd-mobile-rn'
import { Store } from '../../../store';
import { observable } from 'mobx';
import SunTime from './SunTime';

const { ListRow, Overlay, Label } = require("teaset")

const { width, height } = Dimensions.get("window")

@inject("store")
@observer
class ShiJianGua extends React.Component<RouteComponentProps<any> & {
  store: Store;
}> {
  @observable useSunTime: boolean = true;

  render() {
    return (
      <View style={styles.container}>
        {/* <ListRow
          title={(
            <View style={styles.useSunTime}>
              <Text>使用真太阳时：</Text>
              <TouchableOpacity onPress={this.showSunTimeHelp}>
                <Image source={require("../../../assets/ui/help.png")} style={styles.help} resizeMode={"contain"} />
              </TouchableOpacity>
            </View>
          )}
          topSeparator={"full"}
          bottomSeparator={"full"}
          accessory={<Switch checked={this.useSunTime} onChange={v => this.useSunTime = v} />}
        />
        {
          this.useSunTime ?
            (
              <ListRow
                title={`真太阳时：`}
                topSeparator={"full"}
                bottomSeparator={"full"}
                accessory={<Label text={"2018-06-7 12:22:11"}/>}
              />
            )
            : null
        } */}
        <SunTime use={this.useSunTime} onChange={v => this.useSunTime = v} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
  useSunTime: {
    flexDirection: "row",
    alignItems: "center"
  } as ViewStyle,
  help: {
    tintColor: "#DA70D6",
    width: 15,
    height: 15,
  } as ImageStyle,
  overlayHelp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  } as ViewStyle
})

export default withRouter(ShiJianGua); 