import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import AppButton from "../components/Button";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
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
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
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
