import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExerciseList from "./src/components/exerciseList";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ExerciseList></ExerciseList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "#404460",
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    padding: "1em",
    fontSize: 20,
  },
});
