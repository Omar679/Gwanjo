import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InputImage = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons name="camera" size={40} color={Colors.medium} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

export default InputImage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: Colors.light,
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
