import { IWithStyle } from "types";

export interface ITextPill extends IWithStyle {
  children: string;
  type?: "filled" | "default";
}
