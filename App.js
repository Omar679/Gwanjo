import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
