import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationVerifications } from "./src/Screen/Index";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ApplicationVerifications />
    </View>
  );
}

const styles = StyleSheet.create({});
