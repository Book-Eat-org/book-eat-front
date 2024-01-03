import { useController } from "react-hook-form";

import { IFormState } from "../../models";
import { UIInput } from "@book-eat/ui";

const Phone = () => {
  const { field, fieldState } = useController<IFormState, "phone">({
    name: "phone",
    rules: { required: { value: true, message: "Поле не должно быть пустым" } },
  });

  const { onChange, value } = field;
  const { error } = fieldState;

  return (
    <UIInput
      placeholder="Телефон/почта"
      value={value}
      onChange={onChange}
      error={error?.message}
    />
  );
};

export default Phone;
