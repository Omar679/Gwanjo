import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Colors from "../utils/Colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/images/red-jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/images/shirt.jpeg"),
  },
];

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              image={item.image}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      </View>
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  screen: {
    backgroundColor: Colors.light,
  },
});
