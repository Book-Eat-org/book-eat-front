import { FC } from "react";
import { useController } from "react-hook-form";

import { UIFileInput } from "@book-eat/ui";

import { IFormValues } from "../models";
import { propEq } from "ramda";

interface IProps {
  id: string;
}

export const File: FC<IProps> = (props) => {
  const { id } = props;

  const { field } = useController<IFormValues, "files">({
    name: "files",
  });

  const { onChange, value: values } = field;

  const { value } = values?.find(propEq(id, "id")) ?? {};

  const handleChange = (value: File) => {
    const mapped = values?.map((item) =>
      item.id === id ? { ...item, value } : item,
    );
    onChange(mapped);
  };
  return <UIFileInput value={value} onChange={handleChange} />;
};
