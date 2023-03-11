import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { FONTS, COLORS } from "../constants";

const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {iconPosition === "LEFT" && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            marginRight: 5,
            ...iconStyle,
          }}
        />
      )}
      <Text style={{ ...FONTS.body3, ...labelStyle }}>{label}</Text>
      {iconPosition !== "LEFT" && (
        <Image
          source={icon}
          style={{
            ...styles.image,
            marginLeft: 5,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});

export default TextIconButton;
