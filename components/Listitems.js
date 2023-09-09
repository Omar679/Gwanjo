import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../utils/Colors";

const Listitems = ({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.textContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
              {subtitle && (
                <Text numberOfLines={2} style={styles.subtitle}>
                  {subtitle}
                </Text>
              )}
            </View>
            <MaterialCommunityIcons
              color={Colors.medium}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default Listitems;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: Colors.grey,
    fontSize: 14,
    fontWeight: "400",
  },

  textContainer: { marginLeft: 10, justifyContent: "center", flex: 1 },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
