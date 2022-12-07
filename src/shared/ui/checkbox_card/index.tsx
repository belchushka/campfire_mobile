import React from "react";
import { TouchableOpacity, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useBoolean } from "box/shared";
import { colors, setFont } from "styles/index";
import s from "./style";

export const CheckboxCard: React.FC<{ text: string }> = ({ text }) => {
  const { value, setValue, toggle } = useBoolean(false);
  return (
    <TouchableOpacity style={s.checkbox_card} onPress={toggle}>
      <BouncyCheckbox
        disableBuiltInState
        isChecked={value}
        onPress={toggle}
        fillColor={colors.primary}
        iconStyle={{ borderColor: colors.primary }}
        innerIconStyle={{ borderWidth: 2 }}
        size={30}
      />
      <Text style={[s.text, setFont("semiBold")]}>{text}</Text>
    </TouchableOpacity>
  );
};
