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
import { Store } from "../../store";
import { Drawer, Button } from "antd-mobile-rn";
import QiGua from "./QiGua/index";
import { observable } from "mobx";
import { withNavigation, NavigationInjectedProps, createSwitchNavigator } from 'react-navigation';

const { NavigationBar } = require("teaset");

const { height, width } = Dimensions.get("window");


@inject("store")
@observer
class Home extends React.Component<NavigationInjectedProps & {
  store: Store;
}> {
  static router = QiGua.router; 

  state = { openDrawer: false, title: "起卦" };
  @observable navigationBarHeight: number = 0;

  render() {
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
                      this.setState({ openDrawer: false });
                    }
                  },
                  {
                    title: "万物类象",
                    route: () => {
                      this.props.navigation.push("LeiXiang");
                      this.setState({ openDrawer: false });
                    }
                  },
                  {
                    title: "卦例笔记",
                    route: () => {
                      this.props.navigation.push("GuaLiNote");
                      this.setState({ openDrawer: false });
                    }
                  },
                  {
                    title: "《梅花易数》",
                    route: () => {
                      this.props.navigation.push("MeiHuaYiShu");
                      this.setState({ openDrawer: false });
                    }
                  }
                ]}
                renderItem={({ item, index }) => {
                  return (
                    <Button type="primary" style={{ borderRadius: 0 }} onClick={item.route}>{item.title}</Button>
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
              <QiGua store={this.props.store} navigation={this.props.navigation} /> 
            </View>
          </View>
        </Drawer>
      </View>
    );
  }
}

export default Home;

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
