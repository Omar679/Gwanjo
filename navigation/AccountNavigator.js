import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingdetailsScreen from "../screens/ListingdetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccoutNavigator = ({}) => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Account" component={ProfileScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccoutNavigator;
