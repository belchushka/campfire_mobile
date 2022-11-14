import React from "react";
import s from "./style";
import { ActivityIndicator, View } from "react-native";
import { colors } from "styles/index";
import { ILoadingOverlay } from "./types";

export const LoadingOverlay: React.FC<ILoadingOverlay> = ({
  loading,
  blur = 0,
}) => {
  return (
    <>
      {loading && (
        <View style={s.wrapper}>
          <ActivityIndicator color={colors.primary} size={"large"} />
        </View>
      )}
    </>
  );
};
