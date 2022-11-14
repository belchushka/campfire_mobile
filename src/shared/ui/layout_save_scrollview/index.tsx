import React from "react";
import { ILayoutSaveScrollView } from "./types";
import { ScrollView } from "react-native";
import { Space } from "box/shared";

export const LayoutSaveScrollView: React.FC<ILayoutSaveScrollView> = ({
  children,
  withTabBar = false,
  scrollViewProps = {},
}) => {
  return (
    <ScrollView {...scrollViewProps}>
      <Space height={15} />
      {children}
      {withTabBar && <Space height={100} />}
    </ScrollView>
  );
};
