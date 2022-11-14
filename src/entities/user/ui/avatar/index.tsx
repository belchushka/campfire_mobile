import React from "react";
import { IAvatar } from "./types";
import { Image, View } from "react-native";
import s from "./style";
import EmptyAvatar from "assets/images/empty_avatar.png";

export const Avatar: React.FC<IAvatar> = ({ src, size = "md", style }) => {
  return (
    <View style={[s.avatar, s[size], style]}>
      <Image style={[s.image]} source={src ? src : EmptyAvatar} />
    </View>
  );
};
