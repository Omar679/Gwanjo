import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingdetailsScreen from "../screens/ListingdetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = ({}) => {
  return (
    <Stack.Navigator mode="card" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingsDetails" component={ListingdetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
