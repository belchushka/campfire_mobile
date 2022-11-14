import React from "react";
import { View } from "react-native";
import { IContainer } from "./types";
import s from "./style";

export const Container: React.FC<IContainer> = ({ children, style }) => {
  return <View style={[s.container, style]}>{children}</View>;
};
