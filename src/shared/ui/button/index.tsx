import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { IButton, IPillButton } from "./types";
import s from "./style";
import { colors, setFont } from "styles/index";
import { GradientBox } from "box/shared";

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

const textColors = {
  grey: {
    color: colors.deepGrey,
  },
  gradient: {
    color: "white",
  },
};

export const PillButton: React.FC<IPillButton> = ({
  style,
  width,
  preset = "gradient",
  children,
  onClick = () => null,
}) => {
  return (
    <GradientBox
      style={[
        s.pill_button,
        style,
        {
          ...(width && { width }),
        },
      ]}
      colors={
        preset == "grey" ? [colors.fadedGrey, colors.fadedGrey] : undefined
      }
    >
      <TouchableOpacity onPress={onClick} style={s.pill_inner}>
        <Text
          style={[s.pill_inner_text, setFont("semiBold"), textColors[preset]]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </GradientBox>
  );
};
