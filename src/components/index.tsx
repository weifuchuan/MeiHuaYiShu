import * as React from "react";
import Home from "./Home";
import { createStackNavigator } from 'react-navigation';
import GuaLiNote from './GuaLiNote';
import MeiHuaYiShu from './MeiHuaYiShu';
import Gua from './Gua';
import LeiXiang from './LeiXiang';
import NoteEditor from './GuaLiNote/NoteEditor';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    GuaLiNote: {
      screen: GuaLiNote,
    },
    MeiHuaYiShu: {
      screen: MeiHuaYiShu
    },
    Gua: {
      screen: Gua
    },
    LeiXiang: {
      screen: LeiXiang
    },
    NoteEditor:{
      screen: NoteEditor
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",

  })