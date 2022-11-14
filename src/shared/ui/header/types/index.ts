import { ReactElement, ReactNode } from "react";

export interface IHeader {
  left?: ReactNode | ReactElement;
  center?: ReactNode | ReactElement;
  right?: ReactNode | ReactElement;
  centerText?: ReactNode | ReactElement;
}
