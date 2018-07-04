import * as React from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  Image,
  ImageStyle,
  TouchableOpacity,
  FlatList,
  Text,
  TextStyle,

  LayoutChangeEvent,
  Dimensions,
  BackHandler
} from "react-native";
import { inject, observer } from "mobx-react/native";
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route,
  Redirect
} from "react-router";
import { Store } from "../../store";
import { Drawer, Button } from "antd-mobile-rn";
import QiGua from "./QiGua/index";
import GuaLiNote from "./GuaLiNote";
import MeiHuaYiShu from "./MeiHuaYiShu";
import { observable } from "mobx";

const { NavigationBar } = require("teaset");

const { height, width } = Dimensions.get("window");

@inject("store")
@observer
class Home extends React.Component<RouteComponentProps<any> & {
  store: Store;
}> {
  state = { openDrawer: false, title: "起卦" };
  @observable navigationBarHeight: number = 0;

  render() {
    // let path = this.props.match.path + "/";
    // console.info("path:", path)
    // path = path.substring(path.indexOf("/Home") + 5)
    // const titles = path.match(/\/[^\/]+\/?/);
    // let title = titles ? (titles.length === 0 ? "QiGua" : titles[0]) : "QiGua";
    // switch (title) {
    //   case "QiGua":
    //     title = "起卦"
    //     break;
    //   case "GuaLiNote":
    //     title = "卦例笔记"
    //     break;
    //   case "MeiHuaYiShu":
    //     title = "《梅花易数》";
    //     break;
    //   default:
    //     title = "";
    //     break;
    // }

    return (
      <View style={styles.container}>
        <Drawer
          drawerBackgroundColor={"#fff"}
          open={this.state.openDrawer}
          onOpenChange={(opened) => {
            this.setState({ openDrawer: opened });
          }}
          drawerWidth={width * 0.6}
          sidebar={
            <View style={styles.drawerContent} >
              <Image
                source={require("../../assets/ui/meihua.png")}
                style={styles.logo}
                resizeMode={"contain"}
              />
              <Text style={{ color: "#000000", fontSize: 20, marginBottom: height * 0.04 }}>梅花易数</Text>
              <FlatList
                style={{ width: width * 0.6 }}
                data={[
                  {
                    title: "起卦",
                    route: () => {
                      this.props.history.push(`${this.props.match.path}/QiGua`);
                      this.setState({ openDrawer: false, title: "起卦" });
                    }
                  },
                  {
                    title: "卦例笔记",
                    route: () => {
                      this.props.history.push(
                        `${this.props.match.path}/GuaLiNote`
                      );
                      this.setState({ openDrawer: false, title: "卦例笔记" });
                    }
                  },
                  {
                    title: "《梅花易数》",
                    route: () => {
                      this.props.history.push(
                        `${this.props.match.path}/MeiHuaYiShu`
                      );
                      this.setState({ openDrawer: false, title: "《梅花易数》" });
                    }
                  }
                ]}
                renderItem={({ item, index }) => {
                  return (
                    <Button type="primary" onClick={item.route}>{item.title}</Button>
                  );
                }}
                ItemSeparatorComponent={() => (
                  <View style={{ height: height * 0.01, width: 3 }} />
                )}
                keyExtractor={(item) => item.title}
              />
            </View>
          }
        >
          <View style={{ flex: 1 }} >
            <NavigationBar
              onLayout={(event: LayoutChangeEvent) => {
                this.navigationBarHeight = event.nativeEvent.layout.height;
              }}
              title={this.state.title}
              leftView={
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ openDrawer: true });
                  }}
                >
                  <Image
                    style={styles.icon}
                    source={require("../../assets/ui/menu.png")}
                  />
                </TouchableOpacity>
              }
            />
            <View style={{ flex: 1, marginTop: this.navigationBarHeight }} >
              <Switch>
                <Route path={`${this.props.match.path}/QiGua`} component={QiGua} />
                <Route
                  path={`${this.props.match.path}/GuaLiNote`}
                  component={GuaLiNote}
                />
                <Route
                  path={`${this.props.match.path}/MeiHuaYiShu`}
                  component={MeiHuaYiShu}
                />
                <Redirect
                  from={`${this.props.match.path}`}
                  to={`${this.props.match.path}/QiGua`}
                />
              </Switch>
            </View>
          </View>
        </Drawer>
        {/* <Button title={"OPEN"} onPress={() => this.openDrawer = true} /> */}

      </View>
    );
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = (): boolean => {
    console.info(this.props.history.length)
    return this.props.history.length > 0 ?
      (this.props.history.goBack(), true) : false;
  }
}

export default withRouter(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  } as ViewStyle,
  drawer: {
    flex: 1
  } as ViewStyle,
  drawerContent: {
    alignItems: "center"
  } as ViewStyle,
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginTop: height * 0.04
  } as ImageStyle,
  icon: {
    height: 25,
    width: 25,
    marginLeft: 5,
    tintColor: "#fff"
  } as ImageStyle,
  menuList: {
    width: width * 0.6,
  } as ViewStyle,
  menuItem: {
    padding: 5,
    backgroundColor: "#0000FF"
  } as ViewStyle,
  menuItemText: {
    color: "#fff",
    fontSize: 18
  } as TextStyle
});
