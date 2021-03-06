import * as React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native';
import { gua } from '../../../types';
import { observer } from 'mobx-react/native';
import { Store } from '../../../store';
import { observable } from 'mobx';
import ShiJianGua from './ShiJianGua';
import ErShuJiaShiChenGua from './ErShuJiaShiChenGua';
import ErShuGua from './ErShuGua';
import HouTianGua from './HouTianGua';
import { NavigationRouter, NavigationInjectedProps, createStackNavigator } from 'react-navigation';

const { ListRow, Select } = require("teaset")

const TypeNavigator = createStackNavigator(
  {
    ShiJianGua,
    ErShuJiaShiChenGua,
    ErShuGua,
    HouTianGua
  }, {
    initialRouteName: "ShiJianGua",
    headerMode: "none"
  })

@observer
class QiGua extends React.Component<NavigationInjectedProps & {
  store: Store;
}> {
  static router: NavigationRouter<any, any> = TypeNavigator.router;

  @observable guaType: gua.GuaType = "时间卦";

  render() {
    return (
      <View style={styles.container}>
        <ListRow
          title={"起卦方式："}
          topSeparator={"full"}
          bottomSeparator={"full"}
          accessory={<Select
            items={["时间卦", "二数加时辰卦", "二数卦", "后天卦"] as gua.GuaType[]}
            getItemValue={(item: string) => item}
            getItemText={(item: string) => item}
            value={this.guaType}
            pickerTitle={"起卦方式"}
            onSelected={(item: gua.GuaType) => {
              this.guaType = item
              switch (item) {
                case "时间卦":
                  this.props.navigation.replace("ShiJianGua")
                  break;
                case "二数加时辰卦":
                  this.props.navigation.replace("ErShuJiaShiChenGua")
                  break;
                case "二数卦":
                  this.props.navigation.replace("ErShuGua")
                  break;
                case "后天卦":
                  this.props.navigation.replace("HouTianGua")
                  break;
                default:
                  break;
              }
            }}
          />}
        />
        <TypeNavigator navigation={this.props.navigation} />
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  } as ViewStyle,
})

export default (QiGua); 