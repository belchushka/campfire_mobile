import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { IButton } from "./types";
import s from "./style";
import { setFont } from "styles/index";

export const Button: React.FC<IButton> = ({
  children,
  width,
  fullWidth = false,
  color = "#FFFFFF",
  backgroundColor = "#EB6D2E",
  style,
  loading = false,
  onClick = () => null,
}) => {
  return (
    <TouchableOpacity
      onPress={loading ? () => null : onClick}
      style={[
        s.button,
        style,
        {
          backgroundColor: backgroundColor,
          ...(width && { width }),
          ...(fullWidth && { alignSelf: "stretch" }),
        },
      ]}
    >
      <Text
        style={[
          s.button_text,
          setFont("semiBold"),
          {
            color: color,
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator size={"small"} color={"white"} />
        ) : (
          children
        )}
      </Text>
    </TouchableOpacity>
  );
};
