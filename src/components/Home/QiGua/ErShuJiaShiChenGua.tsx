import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, WebView } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Store } from '../../../store';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { List, InputItem, Toast, Picker, DatePicker, Button, Card } from 'antd-mobile-rn';
import { observable } from 'mobx';
import RandomGetNumber from './RandomGetNumber';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import nongLiUseableData from './nongLiUseableData'
import { gua } from '../../../types';
import { qiGuaByTwoNumber, qiGuaByTwoNumberAddHour } from '../../../kit';
import SunTime from './SunTime';
import ModalWebView from '../../ModalWebVIew';

const solarLunar = require("../../../assets/solarlunar.min.js");
const { Overlay } = require("teaset")

@inject("store")
@observer
class ErShuJiaShiChenGua extends React.Component<NavigationInjectedProps & {
  store: Store;
}> {
  @observable up: number = 0;
  @observable bottom: number = 0;
  @observable useNongLi: boolean = false;
  @observable timeForGua: [string, string, string, string] = this.solar2timeForGua(new Date());
  @observable now: Date = new Date();

  overlay: any;
  sunTime?: SunTime;
  useSunTime: boolean = true;

  render() {
    return (
        <View style={styles.container}>
          <List>
            <InputItem
              type={'number'}
              value={this.up.toString()}
              extra={<Text style={{ color: "blue" }}>随机取数</Text>}
              onExtraClick={() => {
                this.overlay = Overlay.show(<RandomGetNumber onOk={n => { this.up = n; Overlay.hide(this.overlay) }} />)
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
                    this.now = d;
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
            <Card.Header title={"二数加时辰卦卦例"} extra={(
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text onPress={() => {
                  ModalWebView.show(guali);
                }}>全屏</Text>
              </View>
            )}  />
            <Card.Body>
              <WebView
                source={{
                  html:guali}}
              />
            </Card.Body>
          </Card>
        </View>

    );
  }

  private qiGua = () => {
    const qg = qiGuaByTwoNumberAddHour(this.up, this.bottom, Number.parseInt(this.timeForGua[3]) as gua.DiZhi);
    const time = this.timeForGua.map((s, i) => i === 0 ? Number.parseInt(s.split('-')[1]) : Number.parseInt(s));
    if (this.useNongLi)
      this.props.navigation.navigate("Gua", {
        gua: qg,
        time: time
      })
    else
      this.props.navigation.navigate("Gua", {
        gua: qg,
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

  private updateTimeForGua() {
    this.now = (this.sunTime!.getNow());
    (this as any).timeForGua = this.solar2timeForGua(this.now);
  }

  backCount = 0;
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
  } as ViewStyle,
})

export default withNavigation(ErShuJiaShiChenGua); 

const guali = `
<style type="text/css">
p {text-indent: 2em}
</style>
<h3 align="center">邻夜扣门借物占</h3>
<p>冬夕酉时，先生方拥炉，有扣门者，初扣一声而止，继而又扣五声，且云借物。先生令勿言，令其子占之所借何物。以一声属乾为上卦，以五声属巽为下卦，又以一乾五巽共六数，加酉时数共得十六数，以六除之，二六一十二，得天风姤。第四爻变巽卦，互见重乾。卦中三乾金，二巽木，为金木之物也，又以乾金短，而巽木长，是借斧也。</p>
<p>子乃断曰：&ldquo;金短木长者，器也，所借锄也。&rdquo;先生曰：&ldquo;非也。必斧也。&rdquo;闻之，果借斧，其子问何故？先生曰：&ldquo;起数又须明理。以卦推之，斧亦可也，锄亦可也；以理推之，夕晚安用锄？必借斧。盖斧切于劈柴之用耳。推数又须明理，为卜占之切要也。推数不推理，是不得也。学数者志之！&rdquo;</p>

               `