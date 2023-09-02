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
import Card from "./components/Card";
import ListingdetailsScreen from "./screens/ListingdetailsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import Icon from "./components/Icon";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen>
      <SafeAreaView style={styles.container}>
        {/* <WelcomeScreen /> */}
        {/* <ViewImageScreen /> */}
        {/* <ListingdetailsScreen /> */}
        {/* <MessagesScreen /> */}
        <Icon name="email" />
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
