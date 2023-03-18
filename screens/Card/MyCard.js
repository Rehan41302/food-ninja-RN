import React from "react";
import { View, Text, ScrollView } from "react-native";

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import TextButton from "../../components/TextButton";

import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const MyCard = ({ navigation }) => {
  function renderHeader() {
    return (
      <Header
        title="MY CARDS"
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
        rightComponent={<View style={{ width: 40 }} />}
      />
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}
    </View>
  );
};

export default MyCard;
