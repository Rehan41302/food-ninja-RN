import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { AuthLayout } from "../";
import CustomSwitch from "../../components/CustomSwitch";
import FormInput from "../../components/FormInput";
import TextButton from "../../components/TextButton";
import TextIconButton from "../../components/TextIconButton";
import { FONTS, SIZES, COLORS, icons, constants } from "../../constants";
import { utils } from "../../utils";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

  function isEnableSignIn() {
    return email !== "" && password !== "" && emailError === "";
  }

  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed"
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        {/* Form Input */}
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
        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={setPassword}
          containerStyle={{ marginTop: SIZES.radius }}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{ height: 20, width: 20, tintColor: COLORS.gray }}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me & forget password */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch
            value={saveMe}
            onChange={(value) => setSaveMe(!value)}
          />
          <TextButton
            label="Forgot Password"
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>

        {/* Sign In CTA */}
        <TextButton
          label="Sign In"
          disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          onPress={() => navigation.navigate("Home")}
        />

        {/* Go for SignUp */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Don't have an Account?
          </Text>

          <TextButton
            label="Sign Up"
            buttonContainerStyle={{ backgroundColor: null, marginLeft: 5 }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </View>

      <View style={{ marginTop: 100 }}>
        <TextIconButton
          label="Continue with Facebook"
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          labelStyle={{ color: COLORS.white, marginLeft: SIZES.radius }}
          iconStyle={{ tintColor: COLORS.white }}
          onPress={() => console.log("Facebook SignIn")}
        />
        <TextIconButton
          label="Continue with Google"
          containerStyle={{
            height: 50,
            marginTop: SIZES.radius,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          labelStyle={{ marginLeft: SIZES.radius }}
          iconStyle={{ tintColor: null }}
          onPress={() => console.log("Google SignIn")}
        />
      </View>
    </AuthLayout>
  );
};

export default SignIn;
