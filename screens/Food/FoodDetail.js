import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";

const FoodDetail = ({ navigation }) => {
  function renderHeader() {
    return (
      <Header
        title="DETAILS"
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        leftComponent={
          <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            icon={icons.back}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <IconButton
            containerStyle={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.transparentPrimray,
            }}
            icon={icons.cart}
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray }}
          />
        }
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
    </View>
  );
};

export default FoodDetail;
