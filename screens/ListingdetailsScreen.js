import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppState } from "react-native";
import AppText from "../components/AppText";
import Colors from "../utils/Colors";
import Listitems from "../components/Listitems";

const ListingdetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/images/red-jacket.jpg")}
      />
      <View style={styles.subTextContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <Listitems
        image={require("../assets/images/ya-habu.jpeg")}
        title="Abubakar Sabiu"
        subtitle="5 Listings"
      />
    </View>
  );
};

export default ListingdetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: Colors.primary,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTextContainer: {
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
