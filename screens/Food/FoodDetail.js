import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";

const FoodDetail = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      <Header
        title="Food Detail"
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.goBack()}
          >
            <Image source={icons.back} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.transparentPrimray,
            }}
          >
            <Image
              source={icons.cart}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default FoodDetail;
