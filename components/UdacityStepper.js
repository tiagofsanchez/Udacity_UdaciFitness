import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const UdacityStepper = props => {
  const { value, unit, onIncrement, onDecrement } = props;

  return (
    <View>
      <View>
        <TouchableOpacity onPress={value => onIncrement(value)}>
          <FontAwesome name="plus" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={value => onDecrement(value)}>
          <FontAwesome name="minus" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
};

export default UdacityStepper;
