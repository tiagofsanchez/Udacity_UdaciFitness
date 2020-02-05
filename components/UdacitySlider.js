import React from "react";
import { View, Text, Slider } from "react-native";

const UdacitySlider = props => {
  const { value, max, onChange, step, unit } = props;

  return (
    <View>
      <Slider
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={value => onChange(value)}
        step={step}
      />
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  );
};

export default UdacitySlider;
