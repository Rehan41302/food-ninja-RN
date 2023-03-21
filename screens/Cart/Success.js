import React, { useEffect } from "react";
import { View, Text, Image, BackHandler } from "react-native";

import TextButton from "../../components/TextButton";
import { FONTS, SIZES, COLORS, images } from "../../constants";

const Success = ({ navigation }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={images.success}
          resizeMode="contain"
          style={{ width: 150, height: 150 }}
        />

        <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
          Congratulations
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            textAlign: "center",
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}
        >
          Payment was successfully made!
        </Text>
      </View>

      <TextButton
        label={"Done"}
        buttonContainerStyle={{
          height: 55,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => navigation.navigate('DeliveryStatus')}
      />
    </View>
  );
};

export default Success;
