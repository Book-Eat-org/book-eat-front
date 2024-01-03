import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";
import { IFormValues } from "../../../models";

interface IProps {
  id: string;
}

export const Email: FC<IProps> = (props) => {
  const { id } = props;

  const { field } = useController<IFormValues, "additionalFields">({
    name: "additionalFields",
  });

  const { onChange, value: values } = field;

  const item = values.find((item) => item.id === id);
  const handleChange = (changedValue?: string) => {
    onChange(
      values?.map((item) =>
        item.id === id ? { ...item, value: changedValue } : item,
      ),
    );
  };

  return (
    <UIInput
      value={item?.value}
      onChange={handleChange}
      placeholder="Введите email"
    />
  );
};
