import React from "react";
import { View, Text, TouchableOpacity , StyleSheet , Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { white , gray , purple } from '../utils/colors';

const UdacityStepper = props => {
  const { value, unit, onIncrement, onDecrement } = props;

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.iosBtn} onPress={value => onIncrement(value)}>
          <FontAwesome name="plus" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iosBtn} onPress={value => onDecrement(value)}>
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

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
  }, 
  iosBtn: { 
    backgroundColor: white, 
    borderColor: purple, 
    borderWidth: 1, 
    borderRadius: 3, 
    padding: 5, 
    paddingLeft: 25, 
    paddingRight: 25, 
  }, 
  
})

export default UdacityStepper;
