import { IWithStyle, Sizes } from "types";

export interface IIconButton extends IWithStyle {
  size: number;
  color: string;
  icon: string;
  onClick: () => void;
}
