import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import AppText from "./AppText";
import Colors from "../utils/Colors";
import { TouchableHighlight } from "react-native";

const Listitems = ({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  ImageComponent,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subtitle && (
                <AppText style={styles.subtitle}>{subtitle}</AppText>
              )}
            </View>
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
    color: Colors.secondary,
  },

  textContainer: { marginHorizontal: 10, justifyContent: "center" },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
