import { StatusBar } from "expo-status-bar";
import React from "react";
import Style from "../Styles";
import { Text, TouchableOpacity } from "react-native";

export default function Button(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[Style.btnDefault, props.buttonStyle ? props.buttonStyle : null]}
    >
      <Text
        style={[
          Style.textWhite,
          Style.textMd,
          props.textStyle ? props.textStyle : null,
        ]}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}
