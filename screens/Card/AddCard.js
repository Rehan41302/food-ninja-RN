import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormInput from "../../components/FormInput";

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import TextButton from "../../components/TextButton";
import { FONTS, SIZES, COLORS, icons, images } from "../../constants";
import { utils } from "../../utils";

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const [cardNumber, setCardNumber] = useState("")
  const [cardNumberError, setCardNumberError] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardNameError, setCardNameError] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [expiryDateError, setExpiryDateError] = useState("")
  const [cvv, setCvv] = useState("")
  const [cvvError, setCvvError] = useState("")
  const [isRemember, setIsRemember] = useState(false)

  useEffect(() => {
    let { selectedCard: card } = route.params;
    setSelectedCard(card);
  }, [route.params]);

  function renderHeader() {
    return (
      <Header
        title="ADD CARD"
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

  function renderCard() {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{cardName}</Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>
              {cardNumber}
            </Text>
            <Text style={{ colo: COLORS.white, ...FONTS.body3 }}>{expiryDate}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  function renderForm() {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        <FormInput 
          label="Card Number"
          keyboardType="number-pad"
          value={cardNumber}
          onChange={setCardNumber}
        />
      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}

      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
        }}
      >
        {renderCard()}

        {renderForm()}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddCard;
