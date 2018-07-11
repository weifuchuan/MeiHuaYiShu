import * as React from 'react'
import { NavigationInjectedProps } from 'react-navigation';
import { View, StyleSheet, ViewStyle, Text, LayoutChangeEvent, Dimensions, ScrollView } from 'react-native';
import { gua,  Note } from '../../types';
import { inject, observer } from 'mobx-react/native';
import { Store } from '../../store';
import { quanGua2xZhiX, getRelationForGua, getGuaByGua } from '../../kit';
import { observable } from 'mobx';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LeiXiang from '../LeiXiang/LeiXiang';
import { IGuaItem } from '../../assets/yijing';
const solarLunar = require("../../assets/solarlunar.min.js");
const { NavigationBar } = require("teaset");

const { height, width } = Dimensions.get("window")

@inject("store")
@observer
export default class Gua extends React.Component<NavigationInjectedProps & {
  store: Store
}, {
  tabViewNavigationState: {
    index: number;
    routes: { key: string; title: string; }[];
  };
}>{
  @observable navigationBarHeight: number = 0;
  @observable guaPage = 0;
  state = {
    tabViewNavigationState: {
      index: 0,
      routes: [
        { key: "leiXiang", title: "类象" },
        { key: 'zhuGua', title: '主卦' },
        { key: 'huGua', title: '互卦' },
        { key: 'bianGua', title: '变卦' },
      ],
    }
  };

  render() {
    const navigation = this.props.navigation;
    const quanGua: gua.QuanGua = navigation.getParam("gua");
    const time: gua.YMDH = navigation.getParam("time");
    const datetime: Date = navigation.getParam("datetime", undefined);
    let hasShiZhi = false;
    let gzYear: string = '', gzMonth: string = '', gzDay: string = '', gzHour: string = '';
    if (datetime) {
      hasShiZhi = true;
      const o: { gzYear: string, gzMonth: string, gzDay: string } = solarLunar.solar2lunar(datetime.getFullYear(), datetime.getMonth() + 1, datetime.getDate());
      gzYear = o.gzYear
      gzMonth = o.gzMonth
      gzDay = o.gzDay
      const zhiShiGan = gua.dayGan2hourGanAtZhi.get(gzDay[0])!;
      let i = gua.tianGan.indexOf(zhiShiGan) + 1;
      i = i + time[3] - 1;
      i = i > 10 ? i - 10 : i;
      gzHour = gua.tianGan[i - 1] + gua.diZhi[time[3] - 1];
    }
    const zhuGua = getGuaByGua(quanGua.gua[1], quanGua.gua[0]);
    const huGua = getGuaByGua(quanGua.gua[3], quanGua.gua[2]);
    const bianGua = getGuaByGua(quanGua.gua[5], quanGua.gua[4]);

    return (
      <View style={styles.container} >
        <NavigationBar
          onLayout={(e: LayoutChangeEvent) => this.navigationBarHeight = e.nativeEvent.layout.height}
          title={quanGua2xZhiX(quanGua)}
          leftView={<NavigationBar.BackButton title='返回' onPress={() => navigation.goBack()} />}
          rightView={<NavigationBar.LinkButton title="保存为卦例" onPress={() => {
            if (datetime)
              this.props.navigation.push("NoteEditor", {
                note: new Note(quanGua, '', datetime ? datetime : new Date(), time)
              })
            else
              this.props.navigation.push("NoteEditor", {
                quanGua, time
              })
          }} />}
        />
        <View style={{ marginTop: this.navigationBarHeight, flex: 1, }}>
          <View style={{ width, alignItems: 'center' }}>
            <ZhenGua qg={quanGua} style={{ marginTop: 10 }} />
            {
              hasShiZhi ?
                <Text selectable={true} style={{ marginTop: 10 }} >{gzYear}, {gzMonth}, {gzDay}, {gzHour} / {`${datetime.getFullYear()}-${datetime.getMonth() + 1}-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes().toString().length === 1 ? '0' + datetime.getMinutes() : datetime.getMinutes()}`}</Text>
                : <Text selectable={true}>{`${gua.diZhi[time[0] - 1]}年, ${time[1]}月, ${time[2]}日, ${gua.diZhi[time[3] - 1]}时`}</Text>
            }
          </View>
          <View style={{ flex: 1 }}>
            <TabView
              navigationState={this.state.tabViewNavigationState}
              onIndexChange={(i) => {
                this.setState((prev) => ({
                  tabViewNavigationState: {
                    ...prev.tabViewNavigationState,
                    index: i
                  }
                }))
              }}
              renderScene={SceneMap({
                zhuGua: () => G(zhuGua),
                huGua: () => G(huGua),
                bianGua: () => G(bianGua),
                leiXiang: LeiXiang
              })}
              renderTabBar={props =>
                <TabBar
                  {...props}
                  indicatorStyle={{ backgroundColor: 'blue' }}
                  style={{ backgroundColor: "#fff" }}
                  renderLabel={(params) => <Text style={{ color: "#000" }}>{(params.route as any).title}</Text>}
                />
              }
            />
          </View>
        </View>
      </View>
    )
  }



  componentDidMount() {
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  } as ViewStyle
})

const yaoWidth = width * 0.7 * 0.33;
const yaoHeight = 10;

const YangYao = ({ color, style = {} }: { color: string; style?: ViewStyle }) => {
  return (
    <View style={Object.assign(style, { backgroundColor: color, width: yaoWidth, height: yaoHeight })} />
  )
}

const YingYao = ({ color, style = {} }: { color: string; style?: ViewStyle }) => {
  return (
    <View style={Object.assign(style, { height: yaoHeight, flexDirection: "row", width: yaoWidth, justifyContent: 'space-between' })} >
      <View style={{ backgroundColor: color, width: yaoWidth * 0.45, height: yaoHeight }} />
      <View style={{ backgroundColor: color, width: yaoWidth * 0.45, height: yaoHeight }} />
    </View>
  )
}

const RowSeparator = () => <View style={{ height: yaoHeight * 0.6, width: yaoWidth }} />;
const LargeRowSeparator = () => <View style={{ height: yaoHeight * 0.8, width: yaoWidth }} />;

const YiGua = ({ color, g, by = 0, style = {}, byColor = '#FFD700' }: { color: string; g: gua.Gua; by?: 0 | 1 | 2 | 3; byColor?: string; style?: ViewStyle }) => {
  const colors = [color, color, color];
  if (by !== 0) {
    colors[by - 1] = byColor ? byColor : color;
  }
  const arr = [{ what: g[0], color: colors[0] }, null, { what: g[1], color: colors[1] }, null, { what: g[2], color: colors[2] }];
  return (
    <View style={Object.assign(style, { width: yaoWidth, height: yaoHeight * 3 + yaoHeight * 0.6 * 2, flexDirection: 'column-reverse' } as ViewStyle)}>
      {arr.map((o, i) => o ?
        (o.what
          ? <YangYao key={i} color={o.color} />
          : <YingYao key={i} color={o.color} />)
        : <RowSeparator key={i} />)}
    </View>
  )
}

const relation2color = new Map<gua.Relation, string>()
  .set("克", "#DC143C") // 猩红
  .set("生", "#006400") // 深绿
  .set('比和', '#000000') // 黑色
  .set("被克", "#8B008B") // 深洋红色
  .set('被生', '#000080') // 海军蓝

const ZhenGua = ({ qg, style = {} }: { qg: gua.QuanGua; style?: ViewStyle }) => {
  const threeGua = [[qg.gua[0], qg.gua[1]], [qg.gua[2], qg.gua[3]], [qg.gua[4], qg.gua[5]]];
  const t = qg.gua[qg.ti];
  return (
    <View style={Object.assign(style, { width: width * 0.9, flexDirection: "row", justifyContent: 'space-around' })}>
      <View style={{ flexDirection: 'column-reverse' }} key={-1}>
        <YiGua color={relation2color.get(getRelationForGua(qg.gua[0], t))!} g={qg.gua[0]} by={qg.ti === 1 ? (qg.bian as 1 | 2 | 3) : 0} />
        <LargeRowSeparator />
        <YiGua color={relation2color.get(getRelationForGua(qg.gua[1], t))!} g={qg.gua[1]} by={qg.ti === 0 ? (qg.bian - 3 as 1 | 2 | 3) : 0} />
      </View>
      {threeGua.slice(1).map((g, i) => {
        return (
          <View style={{ flexDirection: 'column-reverse' }} key={i}>
            <YiGua color={relation2color.get(getRelationForGua(g[0], t))!} g={g[0]} />
            <LargeRowSeparator />
            <YiGua color={relation2color.get(getRelationForGua(g[1], t))!} g={g[1]} />
          </View>
        )
      })}
    </View>
  )
}


const G = (g: IGuaItem): JSX.Element => {
  return (
    <ScrollView style={{ flex: 1 }} >
      <View style={{ padding: width * 0.05 }}>
        <Text style={{ marginBottom: width * 0.02 }}>{`${g.name}：${g.name2}，上${g.pailie.up}下${g.pailie.bottom}。`}</Text>
        <Text style={{ marginBottom: width * 0.02 }}>{g.profile}</Text>
        {g.yaos.map((yao, i) => (
          <Text key={i} style={{ marginBottom: width * 0.02 }}>{`${yao[0]}：${yao[1][yao[1].length - 1] === "。" ? yao[1] : yao[1] + "。"}`}</Text>
        ))}
      </View>
    </ScrollView>
  )
}