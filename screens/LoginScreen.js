import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCoreect={false}
        icon="email"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCoreect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />

      <AppButton title="Login" onpress={() => console.log(email, password)} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    resizeMode: "contain",
  },
});
