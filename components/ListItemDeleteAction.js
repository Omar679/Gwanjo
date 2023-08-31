import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const ListItemDeleteAction = () => {
  return (
    <View
      style={{
        width: 70,
        backgroundColor: Colors.danger,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name="trash-can" size={35} color={Colors.white} />
    </View>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({});
