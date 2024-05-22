import { Box, Switch } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const Base = () => {
  const [checked, setChecked] = useState(false);
  return <Switch checked={checked} onChange={setChecked} />;
};

type Story = StoryObj<typeof Switch>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof Switch> = {
  component: Switch,
};
export default meta;
