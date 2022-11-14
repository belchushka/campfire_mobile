import React from "react";
import { ISpace } from "./types";
import { View } from "react-native";

export const Space: React.FC<ISpace> = ({ width, height }) => {
  return (
    <View
      style={{
        ...(width && { width }),
        ...(height && { height }),
      }}
    />
  );
};
