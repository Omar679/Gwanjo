import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AppButton from "./components/Button";
import { Image, StyleSheet } from "react-native";
import Screen from "./components/Screen";
import InputImage from "./components/InputImage";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to grant permission ");
  };

  useEffect(() => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <Screen style={styles.container}>
      <AppButton title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <InputImage imageUri={imageUri} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
