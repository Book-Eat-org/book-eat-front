import { RadioGroup, UICheckbox } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const Base = () => {
  const [value, setValue] = useState("1");

  const onChange = (_: unknown, value: string) => setValue(value);

  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Radio value="1">1</RadioGroup.Radio>
      <RadioGroup.Radio value="2">2</RadioGroup.Radio>
      <RadioGroup.Radio value="3">3</RadioGroup.Radio>
    </RadioGroup>
  );
};

type Story = StoryObj<typeof Base>;

export const Test: Story = {
  render: Base,
};

const meta: Meta<typeof UICheckbox> = {
  component: UICheckbox,
};
export default meta;
