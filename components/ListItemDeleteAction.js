import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/Colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({ onpress }) => {
  return (
    <TouchableWithoutFeedback
      style={{
        width: 70,
        backgroundColor: Colors.danger,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
      onPress={onpress}
    >
      <MaterialCommunityIcons name="trash-can" size={35} color={Colors.white} />
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({});
