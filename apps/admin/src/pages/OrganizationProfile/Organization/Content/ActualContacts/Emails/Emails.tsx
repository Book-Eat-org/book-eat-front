import { propEq } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import { UIInput } from "@book-eat/ui";
import { IFormValues } from "../../models";

interface IProps {
  id: string;
}

export const Emails: FC<IProps> = (props) => {
  const { id } = props;

  const { field } = useController<IFormValues, "actualContactsEmails">({
    name: "actualContactsEmails",
  });

  const { onChange, value: values } = field;

  const item = values?.find(propEq("id", id));

  const handleChange = (value?: string) => {
    onChange({
      ...values,
      emails: values?.map((item) =>
        item.id === id ? { ...item, value } : item,
      ),
    });
  };
  return (
    <UIInput value={item?.value} onChange={handleChange} placeholder="E-mail" />
  );
};
