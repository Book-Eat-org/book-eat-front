import { TimeInput, UIGrid } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const TimeInputStory = () => {
  const [value, setValue] = useState("");

  return (
    <UIGrid>
      <TimeInput title="Цена" value={value} onChange={setValue} />
      <TimeInput title="Цена" value={value} onChange={setValue} />
    </UIGrid>
  );
};

const Renderer = () => {
  const [value, setValue] = useState("");

  return (
    <UIGrid>
      <TimeInput title="Цена" value={value} onChange={setValue} />
      <TimeInput title="Цена" value={value} onChange={setValue} />
    </UIGrid>
  );
};

type Story = StoryObj<typeof TimeInput>;

export const Test: Story = {
  render: Renderer,
};

const meta: Meta<typeof TimeInput> = {
  component: TimeInput,
};
export default meta;
