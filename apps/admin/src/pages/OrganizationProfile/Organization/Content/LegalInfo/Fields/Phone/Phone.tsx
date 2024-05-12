import { FC } from "react";
import { useController } from "react-hook-form";
import { Flex, UIPhoneInput } from "@book-eat/ui";

import { IFormValues } from "../../../models";

export const Phone: FC = () => {
  const { field } = useController<IFormValues, "legalInfoPhone">({
    name: "legalInfoPhone",
  });

  const { onChange, value } = field;

  return (
    <Flex gap={4} alignItems="center">
      <UIPhoneInput
        type="text"
        onChange={onChange}
        placeholder="Телефон"
        value={value}
      />
    </Flex>
  );
};
