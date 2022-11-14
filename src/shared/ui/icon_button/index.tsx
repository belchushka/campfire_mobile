import React from "react";
import { TouchableOpacity } from "react-native";
import { IIconButton } from "./types";
import Icon from "react-native-vector-icons/Ionicons";

export const IconButton: React.FC<IIconButton> = ({
  color,
  size,
  style,
  icon,
  onClick,
}) => {
  return (
    <TouchableOpacity onPress={onClick} style={[style]}>
      <Icon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};
