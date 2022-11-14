import React from "react";
import { View, Text } from "react-native";
import { setFont } from "styles/index";
import s from "./style";
import { EmptyBlock, Space } from "box/shared";

export const EventsWidget = () => {
  return (
    <View>
      <Text style={[s.title, setFont("semiBold")]}>Сегодня</Text>
      <Space height={30} />
      <EmptyBlock text={"Уведомлений сегодня пока нет"} />
    </View>
  );
};
