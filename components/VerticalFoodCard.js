import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
          {item.calories} Calories
        </Text>
      </View>
      <Image
        source={icons.calories}
        style={{
          width: 20,
          height: 20,
          tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
        }}
      />
      <View style={{ height: 150, width: 150, alignItems: 'center', justifyContent: 'center',  }}>
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      </View>
      <View style={{ alignItems: 'center', marginTop: -20 }}>
        <Text style={{ ...FONTS.h3}}>{item.name}</Text>
        <Text style={{ color: COLORS.darkGray2, textAlign: 'center', ...FONTS.body5 }}>
          {item.description}
        </Text>
        <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
