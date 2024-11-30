import { IAddition } from "@book-eat/api";
import { isNil, isNotNil } from "ramda";

export const getAdditionTitle = (addition: IAddition) => {
  const { weight, title, measure } = addition;

  const weightWithMeasure = isNil(measure) ? undefined : weight + measure;

  return [title, weightWithMeasure].filter(isNotNil).join(" ");
};
