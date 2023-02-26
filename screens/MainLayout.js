import { Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

export default function MainLayout() {
  const progress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 26]);
    return {
      borderRadius,
      transform: [{ scale }],
    };
  });
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        },
        animatedStyles,
      ]}
    >
      <Text>MainLayout</Text>
    </Animated.View>
  );
}
