import { StyleSheet } from "react-native";
import { colors } from "styles/index";

export default StyleSheet.create({
  card: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 2,
  },
  title: {
    color: colors.dark,
    fontSize: 24,
  },
  time: {
    color: colors.deepGrey,
    fontSize: 16,
  },
  bar: {
    width: 5,
    alignSelf: "stretch",
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
});
