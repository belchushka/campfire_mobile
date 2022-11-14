import { StyleSheet } from "react-native";
import { colors } from "styles/index";

export default StyleSheet.create({
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 128,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary,
  },
  xl: {
    width: 128,
    height: 128,
  },
  lg: {
    width: 64,
    height: 64,
  },
  md: {
    width: 32,
    height: 32,
  },
  sm: {
    width: 24,
    height: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
