import { Text } from "react-native";
import React from "react";

import defaultStyles from "../utils/Styles";

const AppText = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
