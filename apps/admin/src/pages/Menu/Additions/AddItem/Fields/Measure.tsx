import { FC } from "react";
import { useController } from "react-hook-form";

import { UIOption, UISelect } from "@book-eat/ui";

import { IFormValues } from "../models";
import { values } from "ramda";
import { Measures, MEASURES_CONFIG } from "@book-eat/utils";

export const Measure: FC = () => {
  const { field } = useController<IFormValues, "measure">({
    name: "measure",
  });
  const { onChange, value } = field;

  return (
    <UISelect
      value={value}
      onChange={onChange}
      placeholder="Ед. изм."
      renderValue={(value: Measures) => MEASURES_CONFIG[value].name}
    >
      {values(Measures).map((key) => (
        <UIOption value={key} key={key}>
          {MEASURES_CONFIG[key].name}
        </UIOption>
      ))}
    </UISelect>
  );
};
