import React from "react";
import { View, Text, Image } from "react-native";

import { images, FONTS, SIZES, COLORS } from "../../constants";

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};

export default AuthLayout;
