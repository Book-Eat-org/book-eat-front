import { IAddition } from "@book-eat/api";
import { isNil, isNotNil } from "ramda";

export const getAdditionTitle = (addition: IAddition) => {
  const { weight, title, measurement } = addition;

  const weightWithMeasure = isNil(measurement)
    ? undefined
    : weight + measurement;

  return [title, weightWithMeasure].filter(isNotNil).join(" ");
};
