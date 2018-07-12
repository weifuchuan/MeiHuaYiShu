import * as React from "react";
import Home from "./Home";
import { createStackNavigator } from 'react-navigation';
import GuaLiNote from './GuaLiNote';
import MeiHuaYiShu from './MeiHuaYiShu';
import Gua from './Gua';
import LeiXiang from './LeiXiang';
import NoteEditor from './GuaLiNote/NoteEditor';
import Note from './GuaLiNote/NoteComp';

export default createStackNavigator(
  {
    Home,
    GuaLiNote,
    MeiHuaYiShu,
    Gua,
    LeiXiang,
    NoteEditor,
    Note
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  })