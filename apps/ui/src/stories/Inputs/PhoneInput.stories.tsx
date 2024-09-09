import { UIGrid, UINumberInput, UIPhoneInput } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const PhoneInput = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <UIGrid>
      <UIPhoneInput title="Цена" value={value} onChange={setValue} />
      <UIPhoneInput title="Цена" value={value} onChange={setValue} />
    </UIGrid>
  );
};

type Story = StoryObj<typeof PhoneInput>;

export const Test: Story = {
  render: PhoneInput,
};

const meta: Meta<typeof UINumberInput> = {
  component: UINumberInput,
};
export default meta;
