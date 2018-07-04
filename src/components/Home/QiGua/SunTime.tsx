import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, Image, ImageStyle, TouchableOpacity, Dimensions } from 'react-native';
import { observer } from 'mobx-react/native';
import { Switch, Picker } from 'antd-mobile-rn'
import { observable } from 'mobx';
import { sunTimeNow } from '../../../kit';
import { Province, City, District, data as provinces } from '../../../assets/longitude';

const { ListRow, Overlay, Label, PullPicker, Toast } = require("teaset")

const { width, height } = Dimensions.get("window")

interface UseableForSelect {
  value: string;
  label: string;
  children?: UseableForSelect[];
}

const data: UseableForSelect[] = provinces.map(
  p => ({
    label: p.name,
    value: p.name,
    children: p.city.map(
      c => ({
        label: c.name,
        value: c.name,
        children: c.district.map(
          d => ({
            label: d.name,
            value: d.name
          }))
      }))
  }))

@observer
export default class SunTime extends React.Component<{
  use: boolean;
  onChange: (use: boolean) => void;
}>{

  @observable now: string = "(尝试获取经度)";
  @observable selectLongitude: boolean = false;
  @observable province: Province = provinces[0];
  @observable city?: City;
  @observable district?: District;

  render() {
    return (
      <View>
        <ListRow
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
          accessory={<Switch checked={this.props.use} onChange={this.props.onChange} />}
        />
        {
          this.props.use ?
            (
              <ListRow
                title={
                  <View style={{ flexDirection: "row" }}>
                    <Text>现在（真太阳时）：</Text>
                    <Text style={{ color: "blue" }} onPress={() => {
                      this.selectLongitude = !this.selectLongitude;
                    }}>选择城市</Text>
                  </View>
                }
                topSeparator={"full"}
                bottomSeparator={"full"}
                accessory={<Label text={this.now} />}
              />
            )
            : null
        }
        {
          this.props.use && this.selectLongitude ?
            (
              <ListRow
                title={`省/市/区(县)：`}
                topSeparator={"full"}
                bottomSeparator={"full"}
                accessory={(
                  <Picker
                    data={data}
                    
                  />
                )}
              />
            )
            : null
        }
      </View>
    );
  }

  timer: any = null;

  componentDidMount() {
    (async () => {
      try {
        const now = await sunTimeNow({ timeout: 5000 });
        this.now = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours}:${now.getMinutes()}`
        this.timer = setInterval(async () => {
          const now = await sunTimeNow({ timeout: 5000 });
          this.now = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours}:${now.getMinutes()}`
        }, 30000)
      } catch (err) {
        console.info(err);
        Toast.fail("获取经度失败，请 选择城市")
      }
    })()
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  static sunTimeHelpOverlayView = (
    <Overlay.PopView
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ backgroundColor: '#fff', width: width * 0.8, minHeight: height * 0.4, borderRadius: 15, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text numberOfLines={1000} style={{ fontSize: 20 }}>
          按照地理学公式，根据经度计算得到的当地“真太阳时”，即古人通过日晷得到的、太阳相对于当地的时辰。
          </Text>
      </View>
    </Overlay.PopView>
  )

  showSunTimeHelp = () => {
    Overlay.show(SunTime.sunTimeHelpOverlayView);
  }
}


const styles = StyleSheet.create({
  useSunTime: {
    flexDirection: "row",
    alignItems: "center"
  } as ViewStyle,
  help: {
    tintColor: "#DA70D6",
    width: 15,
    height: 15,
  } as ImageStyle,
})