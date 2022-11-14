import React from "react";
import { View, Text } from "react-native";
import FadedLogo from "assets/icons/faded_logo";
import { IEmptyBlock } from "./types";
import s from "./style";
import { Space } from "box/shared";
import { setFont } from "styles/index";

export const EmptyBlock: React.FC<IEmptyBlock> = ({ text, style }) => {
  return (
    <View style={[s.body, style]}>
      <FadedLogo />
      <Space height={15} />
      <Text style={[s.text, setFont("regular")]}>{text}</Text>
    </View>
  );
};
