import { IWithChildren, IWithStyle, Sizes } from "types";

export interface IButton extends IWithChildren, IWithStyle {
  width?: number;
  fullWidth?: boolean;
  color?: string;
  backgroundColor?: string;
  loading?: boolean;
  onClick?: () => void;
}
