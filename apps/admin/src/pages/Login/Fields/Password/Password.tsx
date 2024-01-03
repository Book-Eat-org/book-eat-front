import { useController } from "react-hook-form";


import { IFormState } from "../../models";
import { UIInput } from "@book-eat/ui";

const Password = () => {
  const { field, fieldState } = useController<IFormState, "password">({
    name: "password",
    rules: { required: { value: true, message: "Поле не должно быть пустым" } },
  });

  const { onChange, value } = field;

  const { error } = fieldState;

  return (
    <UIInput
      placeholder="Пароль"
      value={value}
      type="password"
      error={error?.message}
      onChange={onChange}
    />
  );
};

export default Password;
