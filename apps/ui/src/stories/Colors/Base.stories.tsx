import { Flex, Grid } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { theme } from "$constants";

const colorsConfig = Object.keys(theme.colors);

export const Base = () => {
  return (
    <Grid gap={3}>
      {colorsConfig.map((color) => (
        <Flex
          bg={color}
          p={3}
          justifyContent="center"
          alignItems="center"
          borderRadius={5}
        >
          {color}
        </Flex>
      ))}
    </Grid>
  );
};

type Story = StoryObj<typeof Flex>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof Flex> = {
  component: Flex,
};
export default meta;
