import { Box, Flex } from "$components";
import { Meta, StoryObj } from "@storybook/react";

export const TestStories = () => {
  return <Flex>test</Flex>;
};

const Sizes = () => (
  <Flex gap={3}>
    <Box background="green" width="100%" height={100} />
    <Box background="green" width="100%" />
  </Flex>
);

type Story = StoryObj<typeof Flex>;

export const Test: Story = {
  render: Sizes,
};

const meta: Meta<typeof Flex> = {
  component: Flex,
};
export default meta;
