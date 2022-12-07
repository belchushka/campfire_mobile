import { StyleSheet } from "react-native";
import { colors } from "styles/index";

export default StyleSheet.create({
  step_bar: {
    width: "100%",
    flexDirection: "row",
    overflow: "hidden",
    paddingHorizontal: 50,
    marginLeft: -10,
  },
  step: {
    height: 4,
    width: "100%",
    backgroundColor: colors.grey,
    borderRadius: 50,
  },
  step_active: {
    backgroundColor: colors.primary,
  },
  step_container: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
});
