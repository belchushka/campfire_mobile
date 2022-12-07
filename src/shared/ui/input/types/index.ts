import { IWithStyle } from "types";
import { KeyboardType, TextInputProps } from "react-native";
import { Control } from "react-hook-form";

export interface IInput extends IWithStyle {
  control: Control<any, any>;
  name: string;
  value?: string;
  placeholder?: string;
  secure?: boolean;
  keyboardType?: KeyboardType;
  rules?: {};
  error?: boolean;
  inputProps?: TextInputProps;
}
