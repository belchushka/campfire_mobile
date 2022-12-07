import React from "react";
import { IInput } from "./types";
import s from "./style";
import { TextInput } from "react-native";
import { colors, setFont } from "styles/index";
import { useController } from "react-hook-form";

export const Input: React.FC<IInput> = ({
  control,
  name,
  style,
  placeholder = "",
  secure = false,
  keyboardType = "default",
  rules = {},
  error,
  inputProps,
}) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    defaultValue: "",
    name,
    rules,
  });
  return (
    <>
      <TextInput
        value={field.value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        placeholderTextColor={colors.deepGrey}
        cursorColor={colors.primaryCursor}
        onChangeText={field.onChange}
        style={[s.input, setFont("semiBold"), error && s.input_error, style]}
        {...inputProps}
      />
    </>
  );
};
