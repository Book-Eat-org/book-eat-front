import { Box, Grid } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { theme } from "$constants";

const colorsConfig = Object.keys(theme.colors);

export const Base = () => {
  return (
    <Grid gap={3}>
      {colorsConfig.map((color) => (
        <Box bg={color} height={100} width={100}>
          {color}
        </Box>
      ))}
    </Grid>
  );
};

type Story = StoryObj<typeof Box>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof Box> = {
  component: Box,
};
export default meta;
