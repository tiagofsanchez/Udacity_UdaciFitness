import React from "react";
import { View, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HistoryStack from "./components/HistoryStack";
import AddEntry from "./components/AddEntry";
import { purple, white } from "./utils/colors";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={purple} barStyle="light-content" />
        <NavigationContainer>
          <Tabs.Navigator
            initialRouteName="AddEntry"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let icon;
                if (route.name === "Add Entry") {
                  icon = (
                    <FontAwesome name="plus-square" size={size} color={color} />
                  );
                } else if (route.name === "History") {
                  icon = (
                    <Ionicons name="ios-bookmarks" size={size} color={color} />
                  );
                }
                return icon;
              }
            })}
            tabBarOptions={{
              activeTintColor: Platform.OS === "ios" ? purple : white,
              style: {
                height: 80,
                backgroundColor: Platform.OS === "ios" ? white : purple,
                shadowColor: "rgba(0, 0, 0, 0.24)",
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
              }
            }}
          >
            <Tabs.Screen name="Add Entry" component={AddEntry} />
            <Tabs.Screen name="History" component={HistoryStack} />
          </Tabs.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
