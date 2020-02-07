import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { FontAwesome , Entypo } from "@expo/vector-icons";
import { white, gray, purple } from "../utils/colors";

const UdacityStepper = props => {
  const { value, unit, onIncrement, onDecrement } = props;

  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.iosBtn}
            onPress={value => onIncrement(value)}
          >
            <Entypo name="plus" size={30} color={purple} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iosBtn}
            onPress={value => onDecrement(value)}
          >
            <Entypo name="minus" size={30} color={purple} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.androidBtn}
            onPress={value => onIncrement(value)}
          >
            <FontAwesome name="plus" size={30} color={white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.androidBtn}
            onPress={value => onDecrement(value)}
          >
            <FontAwesome name="minus" size={30} color={white} />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24, textAlign: "center" }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
    borderRadius: 2,
    padding: 10
  },
  metricCounter: {
    width: 85,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default UdacityStepper;
