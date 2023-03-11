import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "../";
import FormInput from "../../components/FormInput";
import TextButton from "../../components/TextButton";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email address to recover your password"
      titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          errorMsg={emailError}
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={!emailError ? icons.correct : icons.cancel}
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ""
                      ? COLORS.gray
                      : email !== "" && emailError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>
      <TextButton
        label="Send Email"
        disabled={email && !emailError ? false : true}
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: 380,
          borderRadius: SIZES.radius,
          backgroundColor:
            email && !emailError ? COLORS.primary : COLORS.transparentPrimray,
        }}
        onPress={() => navigation.goBack()}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
