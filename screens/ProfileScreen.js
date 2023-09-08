import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Listitems from "../components/Listitems";
import Colors from "../utils/Colors";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <Listitems
        title="Abdullahi"
        subtitle="Abdullahiimam@gmail.com"
        image={require("../assets/images/ya-habu.jpeg")}
      />

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(x) => x.title}
          ItemSeparatorComponent={() => <ListItemSeperator />}
          renderItem={({ item }) => (
            <Listitems
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <Listitems
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 20,
  },
  screen: {
    backgroundColor: Colors.light,
  },
});
