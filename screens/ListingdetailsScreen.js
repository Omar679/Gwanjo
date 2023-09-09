import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import Colors from "../utils/Colors";
import Listitems from "../components/Listitems";

const ListingdetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.subTextContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
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
