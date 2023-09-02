import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 40,
  iconColor = "#fff",
  backgroundColor = "#000",
}) => {
  return (
    <View
      style={{
        backgroundColor,
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: size / 2,
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
