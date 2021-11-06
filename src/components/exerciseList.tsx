import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View } from "react-native";

import { IExerciseProps } from "../types/IExercise";
import Exercise from "./exercise";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("exerciseList");
      return value != null ? JSON.parse(value) : null;
    } catch (e) {
      console.log(e);
    }
  };

  getData()
    .then((val) => {
      if (val) setExercises(val);
    })
    .catch((e) => console.log(e));

  return (
    <View>
      {exercises.length > 0 ? (
        exercises.map((e: IExerciseProps) => (
          <Exercise exercise={{ ...e.exercise }}></Exercise>
        ))
      ) : (
        <Exercise exercise={{ name: "", weight: 0, reps: 0 }}></Exercise>
      )}
    </View>
  );
};

export default ExerciseList;
