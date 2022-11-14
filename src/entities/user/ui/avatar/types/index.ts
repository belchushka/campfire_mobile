import { IWithStyle, Sizes } from "types";

export interface IAvatar extends IWithStyle {
  src?: string | null;
  size?: Sizes;
}
