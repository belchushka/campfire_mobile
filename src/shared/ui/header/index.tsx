import React from "react";
import { Text, View } from "react-native";
import { IHeader } from "./types";
import s from "./style";
import { Container } from "box/shared";
import { setFont } from "styles/index";

export const Header: React.FC<IHeader> = ({
  center,
  left,
  right,
  centerText,
}) => {
  return (
    <Container style={s.header}>
      <View style={s.left}>{left}</View>
      <View style={s.center}>
        {centerText && (
          <Text style={[s.center_text, setFont("semiBold")]}>{centerText}</Text>
        )}
        {center}
      </View>
      <View style={s.right}>{right}</View>
    </Container>
  );
};
