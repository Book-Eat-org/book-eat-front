import { Box, Flex, Autocomplete } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { prop } from "ramda";
import { useState } from "react";

export const Base = () => {
  const options = [
    {
      id: 1,
      value: "Москва",
    },
    {
      id: 2,
      value: "Тула",
    },
    {
      id: 3,
      value: "Рязань",
    },
  ];

  const [value, setValue] = useState<(typeof options)[number] | undefined>();

  return (
    <Autocomplete
      options={options}
      value={value}
      title="Город"
      placeholder="Введите город"
      onChange={setValue}
      renderValue={prop("value")}
      valueExtractor={prop("id")}
    />
  );
};

type Story = StoryObj<typeof Autocomplete>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
};
export default meta;
