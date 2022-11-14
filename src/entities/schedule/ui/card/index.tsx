import React from "react";
import { Text, View } from "react-native";
import { IScheduleCard } from "./types";
import s from "./style";
import { setFont } from "styles/index";
import { Space } from "box/shared";

export const ScheduleCard: React.FC<IScheduleCard> = ({ schedule, style }) => {
  return (
    <View style={[s.card, style]}>
      <View style={[s.bar]}></View>
      <Space width={20} />
      <View>
        <Text style={[s.title, setFont("semiBold")]}>{schedule.title}</Text>
        <Space height={5} />
        <Text style={[s.time, setFont("semiBold")]}>{schedule.time}</Text>
      </View>
    </View>
  );
};
