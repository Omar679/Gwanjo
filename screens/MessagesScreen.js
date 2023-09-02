import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { React, useState } from "react";
import Listitems from "../components/Listitems";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import Colors from "../utils/Colors";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const Initialmessages = [
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
  const [messages, setMessages] = useState(Initialmessages);

  const handleDeleteAction = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id}
        renderItem={({ item }) => (
          <Listitems
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("Message", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onpress={() => handleDeleteAction(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
