import { keys } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import { UICheckbox, UIGrid } from "@book-eat/ui";
import { PLACE_SETTINGS_CONFIG } from "$constants";

import { IFormValues } from "../models";

export const OrdersMode: FC = () => {
  const { field, fieldState } = useController<IFormValues, "placeSettings">({
    name: "placeSettings",
  });
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;

  return (
    <UIGrid gap="20px">
      {keys(PLACE_SETTINGS_CONFIG).map((mode) => (
        <UICheckbox
          onChange={(selected) => onChange({ ...value, [mode]: selected })}
          selected={value[mode]}
          key={mode}
        >
          {PLACE_SETTINGS_CONFIG[mode]}
        </UICheckbox>
      ))}
    </UIGrid>
  );
};
