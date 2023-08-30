import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  const handleLogin = () => {
    console.log("Login");
  };
  const handleRegister = () => {
    console.log("Login");
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Sell things you are done using</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onpress={handleLogin} />
        <AppButton
          title="Register"
          color="secondary"
          onpress={handleRegister}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    width: 350,
  },
  headerContainer: {
    top: 50,
    alignItems: "center",
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  text: {
    fontWeight: "600",
    fontSize: 25,
  },
});
