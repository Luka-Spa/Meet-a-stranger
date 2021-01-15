import { TextInput } from "react-native";
import React from "react";
import Styles from "../Styles";

export default function Input(props) {
  const [focus, focusChange] = React.useState(false);
  return (
    <TextInput
      secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
      value={props.value}
      onChangeText={props.onChangeText}
      onFocus={() => focusChange(true)}
      onBlur={() => focusChange(false)}
      style={[
        Styles.input,
        Styles.textSecondary,
        Styles.textMd,
        focus ? [Styles.inputOnFocus, Styles.textDarkOrange] : null,
      ]}
    />
  );
}
