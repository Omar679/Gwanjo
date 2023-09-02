import { StyleSheet, Switch } from "react-native";
import { useState } from "react";
import Screen from "./components/Screen";
import AppPicker from "./components/AppPicker";
import AppText from "./components/AppText";
import AppTextInput from "./components/AppTextInput";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Categories" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
