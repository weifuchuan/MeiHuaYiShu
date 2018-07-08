import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, WebView } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Store } from '../../../store';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import { Toast, Card, Button, List, DatePicker, Picker } from 'antd-mobile-rn';
import { gua } from '../../../types';
import { observable } from 'mobx';
import ModalWebView from '../../ModalWebVIew';
import LeiXiang from '../../LeiXiang/LeiXiang';
import nongLiUseableData from './nongLiUseableData';
import SunTime from './SunTime';
import { qiGuaByHouTian } from '../../../kit';

const { ListRow, Select } = require("teaset")
const solarLunar = require("../../../assets/solarlunar.min.js");

@inject("store")
@observer
class HouTianGua extends React.Component<NavigationInjectedProps & {
  store: Store;
}> {
  @observable up: gua.GuaW = '乾';
  @observable bottom: gua.GuaW = '乾';
  @observable useNongLi: boolean = false;
  @observable timeForGua: [string, string, string, string] = this.solar2timeForGua(new Date());
  @observable now: Date = new Date();
  sunTime?: SunTime;
  useSunTime: boolean = true;

  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <View style={styles.container}>
          <ListRow
            title={"上卦："}
            detail={<Text style={{ color: "blue" }} onPress={() => LeiXiang.modalShow()}>万物类象  </Text>}
            topSeparator={"full"}
            bottomSeparator={"full"}
            accessory={<Select
              items={gua.words.slice(1)}
              getItemValue={(item: string) => item}
              getItemText={(item: string) => item}
              value={this.up}
              pickerType={"popover"}
              onSelected={(item: gua.GuaW) => {
                this.up = item;
              }}
            />}
          />
          <ListRow
            title={"下卦："}
            topSeparator={"full"}
            bottomSeparator={"full"}
            accessory={<Select
              items={gua.words.slice(1)}
              getItemValue={(item: string) => item}
              getItemText={(item: string) => `${item}(${gua.directions[gua.words.findIndex(w => w === item)!]})`}
              value={this.bottom}
              pickerType={"popover"}
              onSelected={(item: gua.GuaW) => {
                this.bottom = item;
              }}
            />}
          />
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
            <Card.Header title={"后天卦卦例"} extra={(
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
      </AndroidBackHandler>
    );
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

  private qiGua = () => {
    const qg = qiGuaByHouTian(gua.words.slice(1).findIndex(w => w === this.up) as gua.GuaNumber,
      gua.words.slice(1).findIndex(w => w === this.bottom) as gua.GuaNumber,
      Number.parseInt(this.timeForGua[3]) as gua.DiZhi);
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
  };

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
    backgroundColor: "#fff"
  } as ViewStyle,
})

export default withNavigation(HouTianGua);

const guali = `
<style type="text/css">
p {text-indent: 2em}
</style>
<h3 align="center">老人有忧色占</h3>
<p>己丑日卯时，偶在途行，有老人往巽方，有忧色。问其何以有忧，曰无。怪而占之，以老人属乾为上卦，巽方为下卦，是天风姤；又以乾一巽五之数，加卯时四数，总十数，除六得四为动爻，是为天风姤之九四。《易》曰：&ldquo;包无鱼，起凶。&rdquo;是易辞不吉矣。以卦论之，巽木为体，乾金克之，互卦又见重乾，俱是克体，并无生气，且时在途行，其应速。逐以成卦之数中分而取其半，谓老人虫：&ldquo;汝于五日内谨慎出入，恐有重祸。&rdquo;果五日，此老赴吉席，因鱼骨鲠而终。</p>
<p>又凡占卜，克应之期看自己之动静，以决事之迟速，故行则应速，以逐成卦之数，中分而取其半也。坐则事应迟，当倍其成卦之数而定之也。立则半迟半速，止以成卦之数定之可也。虽然如是，又在变通，如占牡丹及观梅之类，则二日花皆朝夕之故，岂特成数之久也。（端法占例）</p>
<h3 align="center">少年有喜色占</h3>
<p>壬申日午时，有少年从离方来，喜形于色，问有何喜，曰无。逐占之，以少年属艮为上卦，离为下卦，得山火贲。以艮七离三加午时七，总十七数，除十二，余五为动爻，贲之六五爻曰：&ldquo;贲于丘园，束帛戋戋，吝，终吉。&rdquo;易辞已吉矣。卦则贲之家人，互见震、坎，离为体，互变俱生之。断曰：子于十七日内必有聘币之喜。至期，果然定亲。</p>
<h3 align="center">牛哀鸣占</h3>
<p>癸卯日午时，有牛鸣于坎方，声极悲，因占之。牛属坤，为上卦，坎方为下卦。坎六坤八，加午时七，共二十一数，除三六一十八，三爻动得地水师之三爻。《易辞》曰：&ldquo;师或舆尸，凶。&rdquo;卦则师变升，互坤、震，乃坤为体，互变俱克之，并无生气。</p>
<p>断曰：此牛二十一日内必遭屠杀。后二十日，人果买此牛，杀以犒众，悉皆异之。</p>
<h3 align="center">鸡悲鸣占</h3>
<p>甲申日卯时，有鸡鸣于乾方，声极悲怆，因占之。鸡属巽，为上卦，乾方为下卦，得风天小畜。以巽五乾一共六数，加卯时四数，总十数，除六得四，爻动变乾，是为小畜之六四。《易》曰：&ldquo;有孚，血去惕出，无咎。&rdquo;推之，割鸡之义。卦则小畜之乾，互见离、兑。乾金为体，离火克之。卦中巽木离火，有烹饪之象。</p>
<p>断曰：此鸡十日当烹。果十日客至，有烹鸡之验。</p>
<h3 align="center">枯枝坠地占</h3>
<p>戊子日辰时，偶行至中途，有树蔚然，无风，枯枝自坠地于兑方。占之，槁木为离，作上卦，兑方为下卦，得火泽睽。以兑二离三，加辰时五数，总十数，去六余四，变山泽损，是睽之九四。《易》曰：&ldquo;睽孤，遇元夫。&rdquo;卦火泽睽变损，互见坎、离，兑金为体，离火克之，且睽损卦名，俱有伤残之义。</p>
<p>断曰：此树十日当伐。果十日，伐树起公榭，而匠者适字&ldquo;元夫&rdquo;也。</p>

               `