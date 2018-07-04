import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Route, Switch, Redirect } from "react-router";
import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Switch>
          <Route path="/Home" component={Home} />
          <Redirect from="/" to="/Home" />
        </Switch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
