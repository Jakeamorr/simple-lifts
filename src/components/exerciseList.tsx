import React from "react";
import { View } from "react-native";
import { IExerciseProps } from "../types/IExercise";
import Exercise from "./exercise";

const ExerciseList = () => {
  const exercises: IExerciseProps[] = [
    {
      exercise: { name: "test", weight: 150, reps: 8 },
    },
    {
      exercise: { name: "test", weight: 150, reps: 8 },
    },
    {
      exercise: { name: "test", weight: 150, reps: 8 },
    },
    {
      exercise: { name: "test", weight: 150, reps: 8 },
    },
  ];

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
