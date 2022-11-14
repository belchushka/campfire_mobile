import { StyleSheet } from "react-native";
import { colors } from "styles/index";

export default StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: colors.grey,
    alignSelf: "stretch",
    color: "black",
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  input_error: {
    borderColor: colors.error,
  },
});
