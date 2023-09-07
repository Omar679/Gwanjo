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
import { TouchableWithoutFeedback } from "react-native";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

const AppPicker = ({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.Colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}> {selectedItem.label} </AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder} </AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.Colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <Screen>
          <Button onPress={() => setShowModal(false)} title="Close" />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            key={numberOfColumns}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setShowModal(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
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
