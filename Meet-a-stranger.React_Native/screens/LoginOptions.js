import React from "react";
import Style from "../Styles";
import Button from "../components/Button";
import { Image, View } from "react-native";

export default function LoginOptions({ navigation }) {
  return (
    <View style={[Style.container, Style.bgWhite]}>
      <View
        style={[
          Style.row,
          Style.flex2,
          Style.justifyCenter,
          Style.alignEnd,
          Style.p4,
        ]}
      >
        <Image
          style={Style.img}
          source={require("../assets/logo-main-page.png")}
        />
      </View>
      <View style={[Style.row, Style.justifyCenter, Style.alignEnd, Style.p1]}>
        <Button onPress={() => navigation.navigate("Login")}>Login</Button>
      </View>
      <View
        style={[Style.row, Style.justifyCenter, Style.alignStart, Style.p1]}
      >
        <Button buttonStyle={Style.bgDefaultOrange}>Guest Login</Button>
      </View>
    </View>
  );
}
