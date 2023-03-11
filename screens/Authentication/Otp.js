import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import TextButton from "../../components/TextButton";

const Otp = ({ navigation }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to saeedrehan3@gmail.com"
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      {/* OTP Input Section */}
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <OTPInputView
          pinCount={4}
          style={{ width: "100%", height: 65 }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => {
            console.log(code);
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Didn't receive code?
          </Text>
          <TextButton
            label={`Resend ${timer > 0 ? `(${timer}s)` : ""}`}
            disabled={timer === 0 ? false : true}
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: SIZES.base,
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={{ marginTop: 280 }}>
        <TextButton
          label="Continue"
          disabled={false}
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => navigation.navigate("Home")}
        />

        <View style={{ marginTop: SIZES.padding, alignItems: "center" }}>
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            By Signin up, you agree to our.
          </Text>
          <TextButton
            label='Terms and Conditions'
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => console.log('Terms and conditions')}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
