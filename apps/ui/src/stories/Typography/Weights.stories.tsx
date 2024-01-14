import { Flex, Typography } from "$components";
import { Meta, StoryObj } from "@storybook/react";

const Story = () => (
  <Flex gap={4}>
    <Typography size="14/14">Weight: 400</Typography>
    <Typography size="14/14" fontWeight={600}>
      Weight: 600
    </Typography>
    <Typography size="14/14" fontWeight={800}>
      Weight: 800
    </Typography>
  </Flex>
);

type Story = StoryObj<typeof Typography>;

export const Weights: Story = {
  render: Story,
};

const meta: Meta<typeof Typography> = {
  component: Typography,
};
export default meta;
