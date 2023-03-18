import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import FooterTotal from "../../components/FooterTotal";

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import StepperInput from "../../components/StepperInput";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const MyCart = ({ navigation }) => {
  const [myCartList, setmyCartList] = useState(dummyData.myCart);

  // Handlers

  const updateQuantityHandler = (newQty, id) => {
    let newMyCartList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, qty: newQty } : cl
    );
    setmyCartList(newMyCartList);
  };

  const removeMyCartHandler = (id) => {
    let newMyCartList = myCartList.filter((cl) => cl.id !== id);
    setmyCartList(newMyCartList);
  };

  // Renders

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

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => {
          return (
            <View
              style={{
                height: 100,
                backgroundColor: COLORS.lightGray2,
                ...styles.cartItemContainer,
              }}
            >
              <View style={{ width: 90, height: 100, marginLeft: -10 }}>
                <Image
                  source={data.item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 10,
                  }}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>
                  ${data.item.price}
                </Text>
              </View>

              <StepperInput
                containerStyle={{
                  height: 50,
                  width: 125,
                  backgroundColor: COLORS.white,
                }}
                value={data.item.qty}
                onAdd={() =>
                  updateQuantityHandler(data.item.qty + 1, data.item.id)
                }
                onMinus={() => {
                  if (data.item.qty > 1) {
                    updateQuantityHandler(data.item.qty - 1, data.item.id);
                  }
                }}
              />
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: COLORS.primary,
              ...styles.cartItemContainer,
            }}
            icon={icons.delete_icon}
            iconStyle={{ marginRight: 10 }}
            onPress={() => removeMyCartHandler(data.item.id)}
          />
        )}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}

      {/* cart list */}
      {renderCartList()}

      {/* footer */}
      <FooterTotal
        subTotal={37.97}
        shippingfee={0.0}
        total={37.97}
        onPress={() => navigation.navigate("MyCard")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default MyCart;
