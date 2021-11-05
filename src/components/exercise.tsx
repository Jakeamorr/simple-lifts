import React, { FC } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native";

const Exercise: FC = (props) => {
  return (
    <View style={{ flexDirection: "row"}}>
      <label>Exercise</label>
      <TextInput style={textInputStyles.input}></TextInput>
      <label>Weight</label>
      <TextInput style={textInputStyles.input}></TextInput>
      <label>Reps</label>
      <TextInput style={textInputStyles.input}></TextInput>
    </View>
  );
}

const textInputStyles = StyleSheet.create({
  input: {
    borderRadius: 30,
    backgroundColor: "#DBDCE6"
  }
});

export default Exercise;