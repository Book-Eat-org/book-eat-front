import { FC, useState } from "react";
import { useController } from "react-hook-form";

import { IFormValues } from "../../models";
import { AddressForm, Flex, NewPage, UIInput } from "@book-eat/ui";
import { not } from "ramda";

export const Address: FC = () => {
  const { field, fieldState } = useController<IFormValues, "address">({
    name: "address",
    rules: { required: { value: true, message: "Укажите адрес" } },
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
        title="Адрес*"
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
          <NewPage>
            <NewPage.Body padding="0">
              <AddressForm
                onChange={handleChange}
                value={value}
                onBack={toggleOpened}
              />
            </NewPage.Body>
          </NewPage>
        </Flex>
      )}
    </>
  );
};
