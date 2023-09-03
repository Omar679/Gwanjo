import { Image, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => {
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCoreect={false}
              icon="email"
              onChangeText={handleChange}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCoreect={false}
              icon="lock"
              onChangeText={handleChange}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />

            <AppButton title="Login" onpress={handleSubmit} />
          </>;
        }}
      </Formik>
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
