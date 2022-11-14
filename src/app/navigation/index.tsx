import { INavigation } from "./types";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "box/pages/login";
import config, { StackParams, tabScreenOptions } from "./config";
import Profile from "box/pages/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Initial from "box/pages/initial";
import Settings from "box/pages/settings";
import Schedule from "box/pages/schedule";
import Contacts from "box/pages/contacts";

const Stack = createNativeStackNavigator<StackParams>();

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...config.screenOptions,
        ...tabScreenOptions(route),
      })}
    >
      <Tab.Screen name={"schedule"} component={Schedule} />
      <Tab.Screen name={"chats"} component={Contacts} />
      <Tab.Screen name={"profile"} component={Profile} />
    </Tab.Navigator>
  );
};

export const Navigation: React.FC<INavigation> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={config.initialRouteName}
        screenOptions={config.screenOptions}
      >
        <Stack.Screen name={"login"} component={Login} />
        <Stack.Screen name={"initial"} component={Initial} />
        <Stack.Screen name={"home"} component={HomeTabNavigation} />
        <Stack.Screen name={"settings"} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
