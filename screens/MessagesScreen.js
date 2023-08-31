import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Listitems from "../components/Listitems";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import Colors from "../utils/Colors";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/images/ya-habu.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/images/ya-habu.jpeg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messags) => messags.id}
        renderItem={({ item }) => (
          <Listitems
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("Message", item);
            }}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
