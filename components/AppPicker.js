import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../utils/Styles";
import AppText from "./AppText";
import { TouchableNativeFeedback } from "react-native";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableNativeFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.Colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? (
              <AppText style={styles.text}> {selectedItem.label} </AppText>
            ) : (
              <AppText style={styles.placeholder}>{placeholder} </AppText>
            )}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.Colors.medium}
          />
        </View>
      </TouchableNativeFeedback>
      <Modal visible={showModal}>
        <Button onPress={() => setShowModal(false)} title="close" />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setShowModal(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
  placeholder: {
    color: defaultStyles.Colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
