import { ReactElement, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IWithStyle {
  style?: StyleProp<ViewStyle>;
}

export interface IWithChildren {
  children: ReactNode | ReactElement;
}

export type Sizes = "sm" | "md" | "lg" | "xl";
