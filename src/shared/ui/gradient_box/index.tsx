import React from "react";
import { IWithChildren, IWithStyle } from "types";
import LinearGradient from "react-native-linear-gradient";

export const GradientBox: React.FC<IWithChildren & IWithStyle> = ({
  children,
  style,
}) => {
  return (
    <LinearGradient
      locations={[0.2, 0.8]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={style}
      colors={["#EB6D2E", "#EB942E"]}
    >
      {children}
    </LinearGradient>
  );
};
