import { UIButton, UIGrid, UINumberInput } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const NumberInput = () => {
  const [value, setValue] = useState(0);

  return (
    <UIGrid>
      <UINumberInput title="Цена" value={value} onChange={setValue} />
      <UINumberInput title="Цена" value={value} onChange={setValue} />
    </UIGrid>
  );
};

const Renderer = () => {
  const [value, setValue] = useState(0);

  return (
    <UIGrid>
      <UINumberInput value={value} onChange={setValue} />
      <UINumberInput value={value} onChange={setValue} />
    </UIGrid>
  );
};

type Story = StoryObj<typeof NumberInput>;

export const Test: Story = {
  render: Renderer,
};

const meta: Meta<typeof UIButton> = {
  component: UIButton,
};
export default meta;
