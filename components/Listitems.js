import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import Colors from "../utils/Colors";

const Listitems = ({ image, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default Listitems;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: Colors.secondary,
  },

  textContainer: { marginHorizontal: 10 },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
