import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import Location from "../Map/Location";
import Users from "../Map/Users";
import Add from "../Map/Add";
import Invite from "../Map/Invite";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    // AddCircle: { screen: MainScreenNavigator },
    // Profile: { screen: Profile },
    // Location: { screen: Location},
    AddCircle: { screen: Add },
    YourCircle: { screen: Users },
    Invite: { screen: Invite }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;