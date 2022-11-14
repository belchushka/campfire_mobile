import { StyleSheet } from "react-native";
import { colors } from "styles/index";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    paddingVertical: 20,
  },
  left: {
    width: 30,
    height: 30,
    alignSelf: "flex-start",
  },
  center: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 20,
    color: "black",
    alignSelf: "center",
  },
  center_text: {
    fontSize: 22,
    color: "black",
  },
  right: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
  },
});
