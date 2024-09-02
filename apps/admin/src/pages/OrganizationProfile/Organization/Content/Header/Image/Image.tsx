import { useController } from "react-hook-form";

import { UIImageInput } from "@book-eat/ui";

import { IFormValues } from "../../models";

export const Image = () => {
  const { field } = useController<IFormValues, "image">({
    name: "image",
    // rules: { required: { value: true, message: "Выберите изображение" } },
  });

  const { onChange, value } = field;

  return <UIImageInput title="Логотип" value={value} onChange={onChange} />;
};
