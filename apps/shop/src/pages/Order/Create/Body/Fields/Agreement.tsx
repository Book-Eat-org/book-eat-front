import { useController } from "react-hook-form";

import { UICheckbox } from "@book-eat/ui";
import { IFormValues } from "../../models.ts";
import { identity } from "ramda";

const Agreement = () => {
  const { field, fieldState } = useController<IFormValues, "agreement">({
    name: "agreement",
    rules: { required: true, validate: identity },
  });

  const { onChange, value } = field;

  const { error } = fieldState;

  return (
    <UICheckbox selected={value} onChange={onChange} error={Boolean(error)}>
      Принимаю условия пользовательского соглашения и даю согласие на обработку
      персональных данных
    </UICheckbox>
  );
};

export default Agreement;
