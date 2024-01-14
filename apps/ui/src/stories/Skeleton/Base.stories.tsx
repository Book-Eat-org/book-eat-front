import { Box, Skeleton } from "$components";
import { Meta, StoryObj } from "@storybook/react";

export const Base = () => {
  return <Skeleton height={40} count={3} gap={2} />;
};

type Story = StoryObj<typeof Box>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof Box> = {
  component: Box,
};
export default meta;
