import * as React from "react";
import Home from "./Home";
import { createStackNavigator } from 'react-navigation';
import GuaLiNote from './GuaLiNote';
import MeiHuaYiShu from './MeiHuaYiShu';
import Gua from './Gua';

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
    },
    Gua:{
      screen:Gua
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",

  })