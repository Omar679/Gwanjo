import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: Colors.light,
    width: "100%",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.dark,
  },
});
