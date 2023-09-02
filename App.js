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
import Listitems from "./components/Listitems";
import ProfileScreen from "./screens/ProfileScreen";
import ListingsScreen from "./screens/ListingsScreen";

export default function App() {
  return (
    <Screen>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingdetailsScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <Icon name="email" /> */}
      {/* <Listitems title="Umar SAbiu" ImageComponent={<Icon name="email" />} /> */}
      {/* <ProfileScreen /> */}
      <ListingsScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
