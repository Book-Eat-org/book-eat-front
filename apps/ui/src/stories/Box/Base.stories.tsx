import { Box } from "$components";
import { Meta, StoryObj } from "@storybook/react";

export const Base = () => {
  return (
    <Box bg="primary" height={100} width={100} p={2} m={1}>
      Box
    </Box>
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
