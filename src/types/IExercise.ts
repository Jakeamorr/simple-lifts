export interface IExercise {
  name: string;
  weight: number; // strings?
  reps: number;
}

export interface IExerciseProps {
  exercise: IExercise;
}
