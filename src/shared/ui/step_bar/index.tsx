import React from "react";
import { IStepBar } from "./types";
import s from "./style";
import { View } from "react-native";

export const StepBar: React.FC<IStepBar> = ({
  style,
  currentStep,
  totalStep,
}) => {
  return (
    <View style={[s.step_bar, style]}>
      {new Array(totalStep).fill(0).map((step, num) => {
        return (
          <View style={[s.step_container]}>
            <View style={[s.step, currentStep >= num && s.step_active]}></View>
          </View>
        );
      })}
    </View>
  );
};
