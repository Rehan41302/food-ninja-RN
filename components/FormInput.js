import React from "react";
import { View, Text, TextInput } from "react-native";

import { FONTS, SIZES, COLORS } from "../constants";

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  value = "",
  prependComponent,
  appendComponent,
  maxLength,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg = "",
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
        <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle
        }}
      >
        {prependComponent}

        <TextInput
          style={{ flex: 1, ...inputStyle }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoComplete={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={onChange}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
