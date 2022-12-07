import { IWithChildren } from "types";
import { ScrollView, ScrollViewProps } from "react-native";

export interface ILayoutSaveScrollView extends IWithChildren {
  withTabBar?: boolean;
  scrollViewProps?: ScrollViewProps;
}
