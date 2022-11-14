import React from "react";
import { ITextPill } from "./types";
import { View, Text } from "react-native";
import s from "./style";
import { setFont } from "styles/index";
import { GradientBox } from "box/shared";

export const TextPill: React.FC<ITextPill> = ({
  children,
  style,
  type = "default",
}) => {
  return (
    <View style={[s.pill, type == "filled" && s.pill_filled, style]}>
      <Text
        style={[s.text, type == "filled" && s.text_filled, setFont("semiBold")]}
      >
        {children}
      </Text>
    </View>
  );
};
