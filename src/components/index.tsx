import * as React from "react";
import Home from "./Home";
import { createStackNavigator } from 'react-navigation';
import GuaLiNote from './GuaLiNote';
import MeiHuaYiShu from './MeiHuaYiShu';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    GuaLiNote:{
      screen:GuaLiNote, 
    },
    MeiHuaYiShu:{
      screen:MeiHuaYiShu 
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",

  })