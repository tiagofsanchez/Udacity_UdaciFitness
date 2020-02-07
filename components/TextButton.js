import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { purple } from "../utils/colors";

const TextButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{color:purple}}>{children}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
