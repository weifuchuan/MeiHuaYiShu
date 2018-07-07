import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, Image, ImageStyle, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Switch, Button, DatePicker, Picker, List, Card } from 'antd-mobile-rn'
import { Store } from '../../../store';
import { observable, IObservableValue, autorun, IReactionDisposer } from 'mobx';
import SunTime from './SunTime';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { clearInterval } from 'timers';
import { gua } from "../../../types";
import { qiGuaByTime } from '../../../kit';
import { jiaZhi, jiaZhiDiZhiValue } from '../../../assets/jiazhi';

const solarLunar = require("../../../assets/solarlunar.min.js");
const { ListRow, Overlay, Label } = require("teaset");

const { width, height } = Dimensions.get("window");

interface IUseableData {
  label: string;
  value: string;
  children?: IUseableData[];
}

const nongLiUseableData: IUseableData[] = jiaZhi.map((d, i1) => ({
  label: d + "年",
  value: (gua.tianGan.findIndex(t => t === d[0]) + 1) + '-' + (jiaZhiDiZhiValue[i1]).toString(),
  children: gua.diZhi.map((d, i2) => ({
    label: (i2 + 1) + "月",
    value: (i2 + 1).toString(),
    children: Array.from(new Array(30), (val, index) => index + 1).map((d, i3) => ({
      label: d + "日",
      value: (d).toString(),
      children: gua.diZhi.map((d, i4) => ({
        label: d + "时",
        value: (i4 + 1).toString()
      }))
    }))
  }))
}));

@inject("store")
@observer
class ShiJianGua extends React.Component<NavigationInjectedProps & {
  store: Store;
}> {
  @observable useSunTime: boolean = true;
  @observable useNongLi: boolean = false;
  @observable timeForGua: [string, string, string, string] = ['1-1', '1', '1', '1'];
  sunTime?: SunTime;
  @observable now: Date = new Date();

  render() {
    return (
      <View style={styles.container}>
        <SunTime
          ref={r => this.sunTime = r!}
          onChange={v => {
            this.useSunTime = v;
          }}
          sync={() => {
            this.updateTimeForGua()
            this.forceUpdate();
          }}
        />
        <View style={styles.line} />
        {
          this.useNongLi ?
            (
              <Picker
                data={nongLiUseableData}
                value={this.timeForGua.slice()}
                cols={4}
                onChange={t => {
                  (this as any).timeForGua = t!
                }}
                onOk={t => {
                  (this as any).timeForGua = t!
                }}
              >
                <List.Item arrow="horizontal">
                  <View style={{ flexDirection: "row" }}>
                    <Text>起卦时间：</Text>
                    <Text style={{ color: "blue" }} onPress={() => this.useNongLi = false}>转公历</Text>
                  </View>
                </List.Item>
              </Picker>
            )
            : (
              <DatePicker
                mode={"datetime"}
                value={this.now}
                onChange={d => {
                  this.now = (d)
                  this.updateTimeForGua();
                }}
                title={"选择时间"}
              >
                <List.Item arrow="horizontal">
                  <View style={{ flexDirection: "row" }}>
                    <Text>起卦时间：</Text>
                    <Text style={{ color: "blue" }} onPress={() => this.useNongLi = true}>转农历</Text>
                  </View>
                </List.Item>
              </DatePicker>
            )
        }
        <Button type={"primary"} style={{ borderRadius: 0 }} onClick={this.qiGua} >起卦</Button>
        <Card full={true} style={{ flex: 1 }}>
          <Card.Header title={"时间卦卦例"} />
          <Card.Body>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ justifyContent: "center", alignItems: "center", marginLeft: width * 0.04, marginRight: width * 0.04 }}>
                <Text selectable={true}>《观梅占》</Text>
                <Text selectable={true}>☱兑 ☰乾 ☱兑</Text>
                <Text selectable={true}>☲离 ☴巽 ☶艮</Text>
                <Text selectable={true}>辰年十二月十七日申时，康节先生偶观梅，见二雀争枝坠地。先生曰：“不动不占，不因事不占。今二雀争枝坠地，怪也。”因占之：辰年五数，十二月十二数，十七日十七数，共三十四数，除四八三十二，得二，属兑，为上卦；加申时九数，总得四十三数，五八除四十，零得三数，为离，作下卦。又上下总四十三数，以六除，六七四十二，得一零为动爻。是为泽为革，初爻变咸，互见乾巽。断之曰：详此卦，明晚当有女子折花，园丁不知而逐之，女子失惊坠地，遂伤其股。右兑金为体，离火克之，互中巽木，复三起离火，则克体之卦气盛。兑为少女，因知女子被伤，而互中巽木，又逢乾金、兑金克之，则巽木被伤。而巽为股，故有伤股之应。幸变为艮土，兑金得生，知女子但被伤，而不至于凶危也。</Text>
                <Text selectable={true}>《牡丹占》</Text>
                <Text selectable={true}>☰乾 ☰乾 ☲离</Text>
                <Text selectable={true}>☴巽 ☰乾 ☴巽</Text>
                <Text selectable={true}>巳年三月十日卯时，先生与客往司马公家共观牡丹，时值花开甚盛。客曰：“花盛如此，亦有数乎？”先生曰：“莫不有数。且因问而可以占矣。”遂占之：以巳年六数，三月三数，十六日十六数，总得二十五数，除三八二十四数，零一数为乾，为上卦；加卯时得四数，共得二十九数，又除三八二十四数，得零五为巽卦，作下卦，得天风姤。又以总计二十九数，以六除之，四六除二十四，得零五，爻动变鼎卦。互见重乾。遂与客曰：“怪哉！此花明日午时，当为马所践毁。”众客愕然，不信。次日午时，果有贵官观牡丹，二马相啮，群至花间弛骤，花尽为之践毁。断之曰：巽木为体，乾金克之，互卦又见重乾，克体之卦多矣，卦中无生意，固知牡丹必为践毁。所谓马者，乾为马也；午时者，离明之象，是以知之也。</Text>
              </View>
            </ScrollView>
          </Card.Body>
        </Card>
      </View>
    );
  }

  private qiGua = () => {
    const time = this.timeForGua.map((s, i) => i === 0 ? Number.parseInt(s.split('-')[1]) : Number.parseInt(s));
    const quanGua = qiGuaByTime(time[0] as gua.DiZhi, time[1] as gua.DiZhi, time[2] as gua.Tian, time[3] as gua.DiZhi);
    if (this.useNongLi)
      this.props.navigation.navigate("Gua", {
        gua: quanGua,
        time: time
      })
    else
      this.props.navigation.navigate("Gua", {
        gua: quanGua,
        time: time,
        datetime: this.now, 
      })
  }

  private solar2timeForGua(date: Date): [string, string, string, string] {
    const { gzYear, lMonth, lDay }: { gzYear: string, lMonth: number, lDay: number } = solarLunar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
    const lYear = gua.diZhi.findIndex(d => d === gzYear[1]) + 1;
    let lHour = date.getHours() + 1;
    lHour = lHour === 24 ? 0 : lHour;
    lHour = lHour % 2 === 0 ? lHour : lHour - 1;
    lHour = lHour / 2 + 1;
    return [(gua.tianGan.findIndex(t => t === gzYear[0]) + 1) + '-' + lYear, lMonth.toString(), lDay.toString(), lHour.toString()];
  }

  private now2timeForGuaAutorunCloser?: IReactionDisposer;


  private updateTimeForGua() {
    this.now = (this.sunTime!.getNow());
    (this as any).timeForGua = this.solar2timeForGua(this.now);
  }

  componentWillUnmount() {
    this.now2timeForGuaAutorunCloser && this.now2timeForGuaAutorunCloser();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  } as ViewStyle,
  line: {
    width,
    height: 0.5,
    backgroundColor: "#D3D3D3"
  } as ViewStyle
})

export default withNavigation(ShiJianGua); 