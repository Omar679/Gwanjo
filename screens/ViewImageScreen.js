import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../utils/Colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btn1} />
      <View style={styles.btn2} />
      <Image
        style={styles.image}
        source={require("../assets/images/shirt.jpeg")}
      />
      <View style={styles.btn3} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  btn1: {
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    left: 20,
    top: 20,
  },
  btn2: {
    backgroundColor: Colors.secondary,
    width: 50,
    height: 50,
    position: "absolute",
    right: 20,
    top: 20,
  },

  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
