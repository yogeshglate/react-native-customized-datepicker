import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { CustomButtonProps } from "../types";

const CustomButton = ({
  title,
  buttonStyle,
  titleStyle,
  onPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
