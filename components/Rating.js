import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { icons, COLORS } from "../constants";

const Rating = ({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {new Array(5).fill().map((_, idx) => (
        <Image
          key={idx}
          source={icons.star}
          style={{
            tintColor: rating >= idx + 1 ? activeColor : inactiveColor,
            ...styles.rateIcon,
            ...iconStyle,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});

export default Rating;
