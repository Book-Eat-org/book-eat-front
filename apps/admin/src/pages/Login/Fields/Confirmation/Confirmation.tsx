import { useController } from "react-hook-form";

import { IFormState } from "../../models";
import { UICheckbox } from "@book-eat/ui";

const Confirmation = () => {
  const { field, fieldState } = useController<IFormState, "confirmation">({
    name: "confirmation",
    rules: { required: true, validate: (val) => val === true },
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

export default Confirmation;
