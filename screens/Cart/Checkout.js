import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import FormInput from "../../components/FormInput";
import FooterTotal from "../../components/FooterTotal";

import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";
import CardItem from "../../components/CardItem";

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setSelectedCard(route.params.selectedCard);
  }, [route]);

  function renderHeader() {
    return (
      <Header
        title="CHECKOUT"
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
        {selectedCard &&
          dummyData.myCards.map((item) => (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ===
                `MyCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
            />
          ))}
      </View>
    );
  }

  function renderDeliveryAddress() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Delivery Address</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image source={icons.location1} style={{ width: 40, height: 40 }} />
          <Text
            style={{ marginLeft: SIZES.radius, width: "85%", ...FONTS.body3 }}
          >
            300 Post Street San Francisco, CA
          </Text>
        </View>
      </View>
    );
  }

  function renderCoupon() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Add Coupon</Text>
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: "hidden",
          }}
          placeholder="Coupon code"
          appendComponent={
            <View
              style={{
                width: 60,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.discount}
                style={{ width: 40, height: 40 }}
              />
            </View>
          }
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}

      <KeyboardAwareScrollView
        extraScrollHeight={-200}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        {renderMyCards()}

        {renderDeliveryAddress()}

        {renderCoupon()}

      </KeyboardAwareScrollView>

      <FooterTotal subTotal={37.97} shippingfee={0} total={37.97} onPress={() => navigation.replace("Success")} />
    </View>
  );
};

export default Checkout;
