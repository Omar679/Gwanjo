import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../utils/Styles";
import AppText from "./AppText";

const AppPicker = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.Colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={defaultStyles.Colors.medium}
      />
    </View>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: defaultStyles.Colors.light,
    width: "100%",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
  },
});
