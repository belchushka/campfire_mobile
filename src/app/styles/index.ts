import { StyleSheet } from "react-native";

const fontWeight = {
  black: "Gilroy-Black",
  heavy: "Gilroy-Heavy",
  extraBold: "Gilroy-ExtraBold",
  bold: "Gilroy-Bold",
  semiBold: "Gilroy-SemiBold",
  medium: "Gilroy-Medium",
  regular: "Gilroy-Regular",
  light: "Gilroy-Light",
  ultraLight: "Gilroy-UltraLight",
  thin: "Gilroy-Thin",
};

export const setFont = (weight: keyof typeof fontWeight) => {
  return StyleSheet.create({
    font: {
      fontFamily: fontWeight[weight],
    },
  }).font;
};

export const colors = {
  grey: "#DBDDE1",
  deepGrey: "#9a9b9e",
  primary: "#EB6D2E",
  dark: "#2E2E3C",
  light: "#F6F6F6",
  primaryCursor: "rgba(235,109,46,0.51)",
  error: "#e74c3c",
};
