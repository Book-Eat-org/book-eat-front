import { FC, useState } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../models";
import { AddressForm, Flex, Page, UIInput } from "@book-eat/ui";
import { not } from "ramda";

export const Address: FC = () => {
  const { field, fieldState } = useController<IFormValues, "address">({
    name: "address",
    rules: { required: { value: true, message: "Укажите имя" } },
  });
  const [opened, setOpened] = useState(false);
  const { onChange, value } = field;
  const errorMessage = fieldState.error?.message;
  const toggleOpened = () => setOpened(not);

  const handleChange = (value?: string) => {
    onChange(value);
    toggleOpened();
  };

  return (
    <>
      <UIInput
        type="text"
        onClick={toggleOpened}
        placeholder="Адрес*"
        value={value}
        error={errorMessage}
      />
      {opened && (
        <Flex
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          background="white"
          zIndex={1}
        >
          <Page>
            <Page.Header>
              <Page.Header.Title>Адрес</Page.Header.Title>
            </Page.Header>
            <Page.Body>
              <AddressForm onChange={handleChange} value={value} />
            </Page.Body>
          </Page>
        </Flex>
      )}
    </>
  );
};
