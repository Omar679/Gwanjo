import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";

const PickerItem = ({ onPress, item }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.picker}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  picker: {
    padding: 20,
  },
});
