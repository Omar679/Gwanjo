import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          Bottom: 30,
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: Colors.primary,
          borderColor: Colors.white,
          borderWidth: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name="plus-circle"
          color={Colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({});
