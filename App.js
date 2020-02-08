import React from "react";
import { View, Platform } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import History from "./components/History";
import AddEntry from "./components/AddEntry";
import { Ionicons } from "@expo/vector-icons";

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <NavigationContainer>
          <Tabs.Navigator initialRouteName="AddEntry">
            <Tabs.Screen name="Add Entry" component={AddEntry} />
            <Tabs.Screen name="History" component={History} />
          </Tabs.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
