import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import StepperInput from "../../components/StepperInput";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const MyCart = ({ navigation }) => {
  function renderHeader() {
    return (
      <Header
      title="MY CART"
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
        <View>
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
            iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
          />
          <View
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              height: 15,
              width: 15,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                lineHeight: 14,
                fontSize: 10,
                color: COLORS.white,
              }}
            >
              10
            </Text>
          </View>
        </View>
      }
    />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}

      {/* cart list */}

      {/* footer */}
    </View>
  );
};

export default MyCart;
