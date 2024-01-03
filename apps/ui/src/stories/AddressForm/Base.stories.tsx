import { AddressForm, UIButton } from "$components";
import { YMaps } from "@pbe/react-yandex-maps";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const Base = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <YMaps
      query={{
        lang: "ru_RU",
        apikey: "8967a948-97db-411f-9d9c-9d385338e42f",
        suggest_apikey: "6501403a-310f-415d-81b6-d420fcf17c0f",
        load: "package.full",
      }}
    >
      <AddressForm
        onChange={setValue}
        value={value}
        onClose={() => undefined}
      />
    </YMaps>
  );
};

type Story = StoryObj<typeof AddressForm>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof AddressForm> = {
  component: AddressForm,
};
export default meta;
