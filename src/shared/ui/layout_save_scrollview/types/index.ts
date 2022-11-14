import { IWithChildren } from "types";
import { ScrollView } from "react-native";

export interface ILayoutSaveScrollView extends IWithChildren {
  withTabBar?: boolean;
  scrollViewProps?: ScrollView;
}
