import { isNil, propEq } from "ramda";
import { FC } from "react";
import { useController } from "react-hook-form";
import { Flex, TrashIcon, UIPhoneInput } from "@book-eat/ui";

import { IFormValues } from "../../models";

interface IProps {
  id: string;
}

export const Phones: FC<IProps> = (props) => {
  const { id } = props;

  const { field } = useController<IFormValues, "legalContactsPhones">({
    name: "legalContactsPhones",
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

  const deleteAvailable = item.id !== values[0].id;

  return (
    <Flex gap={4} alignItems="center">
      <UIPhoneInput
        type="text"
        onChange={handleChange}
        placeholder="Контактный телефон"
        value={item?.value}
      />
      {deleteAvailable && <TrashIcon onClick={handleDelete} />}
    </Flex>
  );
};
