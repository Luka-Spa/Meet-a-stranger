import React from "react";
import Style from "../Styles";
import Button from "../components/Button";
import Input from "../components/Input";
import Axios from "axios";
import { Image, View } from "react-native";

export default function LoginOptions({ navigation }) {
  const fetchData = () => {
    Axios.post("/authenticate", {
      username: username,
      lastName: password,
    }).then((response) => console.log(response));
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={[Style.container, Style.bgWhite]}>
      <View
        style={[
          Style.row,
          Style.flex,
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
        <Input value={username} onChangeText={(val) => setUsername(val)} />
      </View>
      <View
        style={[Style.row, Style.justifyCenter, Style.alignStart, Style.p1]}
      >
        <Input
          secureTextEnty
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <View
        style={[Style.row, Style.justifyCenter, Style.alignStart, Style.p1]}
      >
        <Button onPress={fetchData}>Login</Button>
      </View>
    </View>
  );
}
