import React, { useRef, useState } from "react";
import { View, Text, ImageBackground, Image, Animated } from "react-native";

import { constants, images, FONTS, SIZES, COLORS } from "../../constants";
import TextButton from "../../components/TextButton";

const OnBoarding = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current; // Scroll position of the FlatList
  const flatListRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewChangeRef = useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  //  Paging Dots
  const Dots = () => {
    // Dynamic position of the Dots w.r.t. the FlatList scroll
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Animate the dots on the change of FlatList Item (on-boarding step) */}
        {constants.onboarding_screens.map((_, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: "clamp",
          });
          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: "absolute",
          top: SIZES.height > 800 ? 20 : 10,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo_02}
          resizeMode="contain"
          style={{ width: SIZES.width * 0.5, height: 100 }}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={{ height: 160 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Dots />
        </View>

        {currentIndex < constants.onboarding_screens.length - 1 ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Skip"
              buttonContainerStyle={{ backgroundColor: null }}
              labelStyle={{
                color: COLORS.darkGray2,
              }}
              onPress={() => navigation.replace("SignIn")}
            />
            <TextButton
              label="Next"
              buttonContainerStyle={{
                height: 60,
                width: 200,
                borderRadius: SIZES.base,
              }}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        ) : (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}
          >
            <TextButton
              label="Lets go"
              buttonContainerStyle={{
                height: 60,
                borderRadius: SIZES.base,
              }}
              onPress={() => {
                navigation.replace("SignIn");
              }}
            />
          </View>
        )}
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
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current} // It detects and sets the current step
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
          <View style={{ width: SIZES.width }}>
            {/* Header */}
            <View style={{ flex: 3 }}>
              <ImageBackground
                source={item.backgroundImage}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  height: index === 1 ? "92%" : "100%",
                  width: "100%",
                }}
              >
                <Image
                  source={item.bannerImage}
                  resizeMode="contain"
                  style={{
                    width: SIZES.width * 0.8,
                    height: SIZES.width * 0.8,
                    marginBottom: -SIZES.padding,
                  }}
                />
              </ImageBackground>
            </View>

            {/* Detail */}
            <View
              style={{
                flex: 1,
                marginTop: 30,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: SIZES.radius,
              }}
            >
              <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  textAlign: "center",
                  color: COLORS.darkGray,
                  paddingHorizontal: SIZES.padding,
                  ...FONTS.body3,
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;
