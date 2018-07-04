import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { gua } from '../../../types';
import { inject, observer } from 'mobx-react/native';
import { withRouter, RouteComponentProps, Switch, Route, Redirect } from 'react-router';
import { Store } from '../../../store';
import { observable } from 'mobx';
import ShiJianGua from './ShiJianGua';
import ErShuJiaShiChenGua from './ErShuJiaShiChenGua';
import ErShuGua from './ErShuGua';
import HouTianGua from './HouTianGua';

const { ListRow, Select } = require("teaset")

@inject("store")
@observer
class QiGua extends React.Component<RouteComponentProps<any> & {
  store: Store;
}> {
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
                  this.props.history.push(`${this.props.match.path}/ShiJianGua`)
                  break;
                case "二数加时辰卦":
                  this.props.history.push(`${this.props.match.path}/ErShuJiaShiChenGua`)
                  break;
                case "二数卦":
                  this.props.history.push(`${this.props.match.path}/ErShuGua`)
                  break;
                case "后天卦":
                  this.props.history.push(`${this.props.match.path}/HouTianGua`)
                  break;
                default:
                  break;
              }
            }}
          />}
        />
        <Switch>
          <Route path={`${this.props.match.path}/ShiJianGua`} component={ShiJianGua} />
          <Route path={`${this.props.match.path}/ErShuJiaShiChenGua`} component={ErShuJiaShiChenGua} />
          <Route path={`${this.props.match.path}/ErShuGua`} component={ErShuGua} />
          <Route path={`${this.props.match.path}/HouTianGua`} component={HouTianGua} />
          <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/ShiJianGua`} />
        </Switch>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
})

export default withRouter(QiGua); 