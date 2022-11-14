import { StyleSheet } from "react-native";
import { colors } from "styles/index";

export default StyleSheet.create({
  name: {
    color: "black",
    fontSize: 30,
  },
  pills: {
    flexGrow: 0,
  },

  pills_pill: {
    marginLeft: 12,
  },

  day_feedback: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  day_feedback_gradient: {
    borderRadius: 36,
  },

  day_feedback_title: {
    color: "white",
    fontSize: 20,
  },
  day_feedback_subtitle: {
    fontSize: 12,
  },
});
