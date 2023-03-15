import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import Header from "../../components/Header";
import IconButton from "../../components/IconButton";
import IconLabel from "../../components/IconLabel";
import LineDivider from "../../components/LineDivider";
import Rating from "../../components/Rating";
import TextButton from "../../components/TextButton";
import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";

const FoodDetail = ({ route, navigation }) => {
  const [foodItem, setFoodItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    let itemId = route.params.itemId;
    if (itemId) {
      for (let idx = 0; idx < dummyData.menu.length - 1; idx++) {
        const menuItem = dummyData.menu[idx];
        const item = menuItem.list.find((i) => i.id === itemId);

        if (item) {
          console.log({ item });
          setFoodItem(item);
          break;
        }
      }
    }
  }, [route.params]);

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
                  lineHeight: 0,
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

  function renderDetails() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories and Favourite */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Calories */}
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.calories}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
                {foodItem.calories} calories
              </Text>
            </View>

            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          {/* Food Image */}
          <Image
            source={foodItem.image}
            resizeMode="contain"
            style={{ height: 170, width: "100%" }}
          />
        </View>

        {/* Food Info */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ ...FONTS.h1 }}>{foodItem.name}</Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {foodItem.description}
          </Text>

          {/* Rating and Shipping */}
          <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
            <IconLabel
              containerStyle={{ backgroundColor: COLORS.primary }}
              icon={icons.star}
              label="4.5"
              labelStyle={{ color: COLORS.white }}
            />
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.clock}
              iconStyle={{ tintColor: COLORS.black }}
              label="30 Mins"
            />
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.dollar}
              iconStyle={{ tintColor: COLORS.black }}
              label="Free Shipping"
            />
          </View>

          {/* Sizes */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Sizes:</Text>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, index) => (
                <TextButton
                  key={item.id}
                  buttonContainerStyle={{
                    width: 55,
                    height: 55,
                    margin: SIZES.base,
                    borderWidth: 1,
                    borderRadius: SIZES.radius,
                    borderColor:
                      selectedSize === item.id ? COLORS.primary : COLORS.gray2,
                    backgroundColor:
                      selectedSize === item.id ? COLORS.primary : null,
                  }}
                  label={item.label}
                  labelStyle={{
                    color:
                      selectedSize === item.id ? COLORS.white : COLORS.gray2,
                    ...FONTS.body2,
                  }}
                  onPress={() => setSelectedSize(item.id)}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderResturant() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          source={images.profile}
          style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>Micro Dev</Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
            1.2 KM away from you
          </Text>
        </View>
        
        <Rating rating={4} iconStyle={{ marginLeft: 3 }} />
      </View>
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

      {/* Body */}
      {foodItem && (
        <ScrollView>
          {/* Food Detail */}
          {renderDetails()}

          <LineDivider />

          {/* Resturant */}
          {renderResturant()}
        </ScrollView>
      )}
    </View>
  );
};

export default FoodDetail;
