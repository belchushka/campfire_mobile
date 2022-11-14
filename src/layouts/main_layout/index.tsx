import React from "react";
import { IMainLayout } from "./types";
import { View } from "react-native";
import s from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <SafeAreaView style={[s.wrapper]}>
      <View style={[s.wrapper, s.container]}>{children}</View>
    </SafeAreaView>
  );
};
