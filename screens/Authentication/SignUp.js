import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "../";
import FormInput from "../../components/FormInput";
import TextButton from "../../components/TextButton";
import TextIconButton from "../../components/TextIconButton";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPass, setShowPass] = useState(false);

  function isEnableSignUp() {
    return (
      email !== "" &&
      password !== "" &&
      emailError === "" &&
      usernameError === "" &&
      passwordError === ""
    );
  }

  return (
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue"
      titleContainerStyle={{ marginTop: SIZES.radius }}
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
          label="Username"
          errorMsg={usernameError}
          containerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) => {
            setUsername(value);
          }}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={!usernameError ? icons.correct : icons}
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username === ""
                      ? COLORS.gray
                      : username !== "" && usernameError === ""
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
          onChange={(value) => {
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwordError}
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

        {/* Sign Up CTA */}
        <TextButton
          label="Sign Up"
          disabled={isEnableSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          onPress={() => navigation.navigate("Otp")}
        />

        {/* Go for SignIn */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Already have an account?
          </Text>

          <TextButton
            label="Sign In"
            buttonContainerStyle={{ backgroundColor: null, marginLeft: 5 }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.goBack()}
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

export default SignUp;
