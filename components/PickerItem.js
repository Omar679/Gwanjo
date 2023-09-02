import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.picker}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  picker: {
    padding: 20,
  },
});
