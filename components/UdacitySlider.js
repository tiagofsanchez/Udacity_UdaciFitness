import React from "react";
import { View, Text, Slider , StyleSheet } from "react-native";
import { gray } from "../utils/colors";

const UdacitySlider = props => {
  const { value, max, onChange, step, unit } = props;

  return (
    <View style={styles.container}>
      <Slider
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={value => onChange(value)}
        step={step}
        style={{flex: 1}}
      />
      <View style={styles.metricCounter}>
      <Text style={{fontSize: 24, textAlign:'center' }}>{value}</Text>
      <Text style={{fontSize: 18, color: gray}}>{unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between' 
  }, 
  metricCounter: {
    width: 85,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default UdacitySlider;
