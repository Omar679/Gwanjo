import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btn1}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.btn2}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
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
    left: 20,
    top: 30,
  },
  btn2: {
    position: "absolute",
    right: 20,
    top: 30,
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
