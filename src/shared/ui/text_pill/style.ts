import { StyleSheet } from "react-native";
import { colors } from "styles/index";

export default StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: 16,
  },
  pill: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: "white",
  },
  text_filled: {
    color: "white",
  },
  pill_filled: {
    backgroundColor: colors.primary,
  },
});
