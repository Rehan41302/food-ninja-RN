import React from "react";
import { View, Text, Image, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={images.logo_02}
              resizeMode="contain"
              style={{ width: 200, height: 100 }}
            />
          </View>

          <View
            style={{
              marginTop: SIZES.padding,
              ...titleContainerStyle,
            }}
          >
            <Text style={{ textAlign: "center", ...FONTS.h2 }}>{title}</Text>
            <Text
              style={{
                textAlign: "center",
                color: COLORS.darkGray,
                marginTop: SIZES.base,
                ...FONTS.body3,
              }}
            >
              {subtitle}
            </Text>
          </View>

          {children}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
