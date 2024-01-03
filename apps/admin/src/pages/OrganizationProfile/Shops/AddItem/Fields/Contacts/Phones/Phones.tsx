import { complement, equals, keys, propEq } from "ramda";
import { FC, useState } from "react";
import { useController } from "react-hook-form";

import {
  DownArrowIcon,
  Flex,
  TrashIcon,
  UICheckbox,
  UIGrid,
  UIPhoneInput,
  UIPopupMenu,
} from "@book-eat/ui";
import { CONTACTS_CONFIG } from "$constants";
import { Contacts } from "$enums";

import { IFormValues } from "../../../models";

interface IProps {
  id: string;
}

export const Phones: FC<IProps> = (props) => {
  const { id } = props;

  const [contactsOpened, setContactsOpened] = useState(false);

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

  const handleContactChange = (value: string) => {
    onChange(
      values?.map((item) =>
        item.id === id ? { ...item, title: value } : item,
      ),
    );
  };

  const handleDelete = () => {
    const newValues = values?.filter((item) => item.id !== id);
    onChange(newValues);
  };

  const onContactsClose = () => {
    setContactsOpened(false);
  };

  const onContactsOpen = () => {
    setContactsOpened(true);
  };

  return (
    <Flex alignItems="center" gap={3}>
      <TrashIcon onClick={handleDelete} />
      <UIPhoneInput
        type="text"
        onChange={handleChange}
        placeholder="Контактный телефон"
        title={CONTACTS_CONFIG[item?.title as Contacts]?.label}
        value={item?.value}
        postfix={<DownArrowIcon onClick={onContactsOpen} />}
      />
      {contactsOpened && (
        <UIPopupMenu onClose={onContactsClose}>
          <UIGrid gap="30px">
            {keys(CONTACTS_CONFIG)
              .filter(complement(equals(Contacts.Mail)))
              .map((contactItem) => (
                <UICheckbox
                  key={contactItem}
                  selected={item?.title === contactItem}
                  onChange={() => {
                    handleContactChange(contactItem);
                    onContactsClose();
                  }}
                >
                  {CONTACTS_CONFIG[contactItem].label}
                </UICheckbox>
              ))}
          </UIGrid>
        </UIPopupMenu>
      )}
    </Flex>
  );
};
