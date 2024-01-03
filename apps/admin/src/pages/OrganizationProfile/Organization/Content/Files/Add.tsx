import { FC } from "react";
import { useController } from "react-hook-form";

import { UIFileInput } from "@book-eat/ui";

import { IFormValues } from "../../models";
import { v4 } from "uuid";

export const Add: FC = () => {
  const { field, fieldState } = useController<IFormValues, "files">({
    name: "files",
    // rules: { required: { value: true, message: "Выберите изображение" } },
  });

  const { onChange, value: values } = field;

  const handleChange = (value: File) => {
    onChange([...values, { id: v4(), value }]);
  };

  return (
    <UIFileInput
      extensions={["pdf"]}
      error={fieldState.error?.message}
      fileName="PDF"
      onChange={handleChange}
    />
  );
};
