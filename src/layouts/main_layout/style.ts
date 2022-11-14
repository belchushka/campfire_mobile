import { StyleSheet } from "react-native";
import { colors } from "styles/index";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    zIndex: 1000,
    backgroundColor: "white",
  },
  header_title: {
    flexDirection: "row",
    alignItems: "center",
  },
  header_back: {
    marginRight: 10,
  },
  header_text: {
    color: "black",
    fontSize: 25,
  },
  container: {
    backgroundColor: "white",
  },
});
