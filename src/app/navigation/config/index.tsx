import Ionicons from "react-native-vector-icons/Ionicons";
import { Route } from "@react-navigation/native";
import { colors, setFont } from "styles/index";

export type StackParams = {
  login: undefined;
  home: undefined;
  initial: undefined;
  settings: undefined;
  feedback_quiz: undefined;
};

export default {
  initialRouteName: "initial",
  screenOptions: {
    headerShown: false,
  },
} as {
  initialRouteName: keyof StackParams;
  screenOptions: any;
};

export const tabScreenOptions = (route: Route<any>) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case "profile":
        iconName = "person";
        break;
      case "schedule":
        iconName = "time";
        break;
      case "chats":
        iconName = "chatbubbles";
        break;
      case "wallet":
        iconName = "wallet";
        break;
    }

    return <Ionicons name={iconName} size={25} color={color} />;
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.grey,
  tabBarStyle: {
    position: "absolute",
    bottom: 30,
    height: 60,
    left: 12,
    right: 12,
    borderRadius: 30,
    borderTopWidth: 0,
    paddingHorizontal: 20,
    elevation: 50,
  },
  tabBarShowLabel: false,
});
