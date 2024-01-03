import { isNil, propEq, reject } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";

import { Flex, TrashIcon, UIGrid, UIInput } from "@book-eat/ui";
import { IFormValues } from "../../models";

interface IProps {
  id: string;
}

export const Emails: FC<IProps> = (props) => {
  const { id } = props;

  const { field } = useController<IFormValues, "legalContactsEmails">({
    name: "legalContactsEmails",
  });

  const { onChange, value: values } = field;

  const item = values?.find(propEq(id, "id"));

  if (isNil(item)) {
    return null;
  }

  const handleChange = (value?: string) => {
    onChange(
      values?.map((item) => (item.id === id ? { ...item, value } : item)),
    );
  };

  const handleDelete = () => {
    const newValues = values.filter(({ id }) => id !== item.id);
    onChange(newValues);
  };

  return (
    <Flex gap={4} alignItems="center">
      <UIInput
        value={item?.value}
        onChange={handleChange}
        placeholder="Введите email"
      />
      <TrashIcon onClick={handleDelete} />
    </Flex>
  );
};
