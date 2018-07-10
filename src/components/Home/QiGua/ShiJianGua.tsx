import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, Image, ImageStyle, TouchableOpacity, Dimensions, ScrollView, WebView } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Switch, Button, DatePicker, Picker, List, Card, Toast } from 'antd-mobile-rn'
import { Store } from '../../../store';
import { observable, IObservableValue, autorun, IReactionDisposer } from 'mobx';
import SunTime from './SunTime';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { gua } from "../../../types";
import { qiGuaByTime } from '../../../kit';
import { jiaZhi, jiaZhiDiZhiValue } from '../../../assets/jiazhi';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import nongLiUseableData from './nongLiUseableData'
import ModalWebView from '../../ModalWebVIew';

const solarLunar = require("../../../assets/solarlunar.min.js");
const { width, height } = Dimensions.get("window");


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
                    this.now = (d);
                    (this as any).timeForGua = this.solar2timeForGua(this.now);
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
            <Card.Header title={"时间卦卦例"} extra={(
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text onPress={() => {
                  ModalWebView.show(guali);
                }}>全屏</Text>
              </View>
            )} />
            <Card.Body>
              <WebView
                source={{
                  html: guali
                }}
              />
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

  private backCount = 0;
  private onBackButtonPressAndroid = () => {
    if (this.backCount === 1) {
      this.backCount = 0;
      return false;
    } else {
      this.backCount = 1;
      Toast.info("再按退出", 0);
      setTimeout(() => {
        this.backCount = 0;
        Toast.hide();
      }, 2000)
      return true;
    }
  };


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

const guali = `
<style type="text/css">
p {text-indent: 2em}
</style>
<h3 align="center">观梅占</h3>
<p>辰年十二月十七日申时，康节先生偶观梅，见二雀争枝坠地。先生曰：&ldquo;不动不占，不因事不占。今二雀争枝坠地，怪也。&rdquo;因占之，辰年五数，十二月十二数，十七日十七数，共三十四数，除四八三十二，余二，属兑，为上卦，加申时九数，总得四十三数，五八除四十，余得三数，为离，作下卦。又上下总四十三数，以六除，六七四十二，余一为动爻，是为泽火革。初爻变咸，互见乾巽。</p>
<p>断之曰：&ldquo;详此卦，明晚当有女子折花，园丁不知而逐之，女子失惊坠地，逐伤其股。右兑金为体，离火克之。互中巽木，复三起离火，则克体之卦气盛。兑为少女，因知女子之被伤，而互中巽木，又逢乾金兑金克之，则巽木被伤，而巽为股，故有伤股之应。幸变为艮土，兑金得生，知女子但被伤，而不至凶危也。&rdquo;（年月日时占例）</p>
<h3 align="center">牡丹占</h3>
<p>巳年三月十六日卯时，先生与客往司马公家共观牡丹。时值花开甚盛，客曰：&ldquo;花盛如此，亦有数乎？&rdquo;先生曰：&ldquo;莫不有数。且因问而可占矣。&rdquo;逐占之。以巳年六数，三月三数，十六日十六数，总得二十五数，除三八二十四数，余一数为乾，为上卦。卯时四数，共得二十九数，又除三八二十四数，余五为巽卦，作下卦，得天风姤。又以总计二十九数，以六除之，四六除二十四，得五爻动，变鼎卦，互见重乾。逐与客曰：&ldquo;怪哉，此花明日午时，当为马所践毁。&rdquo;众客愕然不信，次日午时，果有贵官观牡丹，二马相啮，群至花间驰骤，花尽为之践毁。</p>
<p>断之曰：&ldquo;巽木为体，乾金克之，互卦又见重乾，克体之卦多矣，卦中无生意，固知牡丹必为践毁。所谓马者，乾为马也。午时者，离明之象，是以知之也。&rdquo;</p>

                `