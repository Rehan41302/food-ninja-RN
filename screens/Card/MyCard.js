import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CardItem from "../../components/CardItem";

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import TextButton from "../../components/TextButton";

import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

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

  function renderMyCards() {
    return (
      <View>
        {dummyData.myCards.map((item) => (
          <CardItem
            key={`MyCard-${item.id}`}
            item={item}
            isSelected={
              `${selectedCard?.key}-${selectedCard?.id}` === `MyCard-${item.id}`
            }
            onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
          />
        ))}
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* My cards */}
        {renderMyCards()}

        {/* Add new cards */}
      </ScrollView>
    </View>
  );
};

export default MyCard;
