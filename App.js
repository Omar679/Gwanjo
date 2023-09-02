import { StyleSheet, Switch } from "react-native";
import { useState } from "react";
import Screen from "./components/Screen";
import AppPicker from "./components/AppPicker";
import AppText from "./components/AppText";
import AppTextInput from "./components/AppTextInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Categories"
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
