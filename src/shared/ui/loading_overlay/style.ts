import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: width,
    height: height,
    zIndex: 999,
    top: -70,
    backgroundColor: "white",
  },
});
