import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import History from "./History";
import EntryDetails from "./EntryDetail";
import { purple, white } from "../utils/colors";

const Stack = createStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white
        }
      }}
    >
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Details" component={EntryDetails} />
    </Stack.Navigator>
  );
};

export default HistoryStack;
