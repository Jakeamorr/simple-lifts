import React, { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Exercise: FC = (props) => {
  return (
    <View style={mainContainerStyle.input}>
      <View style={{ flex: 4 }}>
        <label>Exercise</label>
        <TextInput style={textInputStyles.input}></TextInput>
      </View>
      <View style={{ flex: 2 }}>
        <label>Weight</label>
        <TextInput style={textInputStyles.input}></TextInput>
      </View>
      <View style={{ flex: 1 }}>
        <label>Reps</label>
        <TextInput style={textInputStyles.input}></TextInput>
      </View>
    </View>
  );
};

const mainContainerStyle = StyleSheet.create({
  input: {
    color: "#fff",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    gap: "1em",
    justifyContent: "space-between",
  },
});

const textInputStyles = StyleSheet.create({
  input: {
    borderRadius: 30,
    backgroundColor: "#777B97",
    color: "#fff",
    height: 60,
    fontSize: 30,
    marginTop: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
});

export default Exercise;
