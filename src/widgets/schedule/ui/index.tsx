import React from "react";
import { View, Text } from "react-native";
import { setFont } from "styles/index";
import s from "./style";
import { EmptyBlock, Space } from "box/shared";
import { ScheduleCard } from "box/entities";

export const ScheduleWidget = () => {
  return (
    <View>
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
      <ScheduleCard
        schedule={{
          time: "8:30 - 9:00",
          title: "Зарядка",
        }}
      />
      <Space height={15} />
    </View>
  );
};
