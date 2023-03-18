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

  function renderAddNewCard() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Add new card</Text>

        {dummyData.allCards.map((item) => (
          <CardItem
            key={`NewCard-${item.id}`}
            item={item}
            isSelected={
              `${selectedCard?.key}-${selectedCard?.id}` ===
              `NewCard-${item.id}`
            }
            onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
          />
        ))}
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          label={selectedCard?.key === "NewCard" ? "Add" : "Place your Order"}
          disabled={selectedCard === null}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            borderColor: COLORS.primary,
            backgroundColor:
              selectedCard === null ? COLORS.gray : COLORS.primary,
          }}
        />
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
        {renderAddNewCard()}
      </ScrollView>

      {renderFooter()}
    </View>
  );
};

export default MyCard;
