import { Flex } from "$components";
import { Meta, StoryObj } from "@storybook/react";

export const TestStories = () => {
  return <Flex>test</Flex>;
};

const Sizes = () => (
  <div>
    <Flex gap={3}>
      <div>Тест 1</div>
      <div>Тест 1</div>
    </Flex>
  </div>
);

type Story = StoryObj<typeof Flex>;

export const Test: Story = {
  render: Sizes,
};

const meta: Meta<typeof Flex> = {
  component: Flex,
};
export default meta;
