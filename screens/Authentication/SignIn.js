import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { AuthLayout } from "../";
import CustomSwitch from "../../components/CustomSwitch";
import FormInput from "../../components/FormInput";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { utils } from "../../utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);

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
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(!value)} />
        </View>

        {/* Sign In CTA */}

        {/* Go for SignUp */}
      </View>
    </AuthLayout>
  );
};

export default SignIn;
