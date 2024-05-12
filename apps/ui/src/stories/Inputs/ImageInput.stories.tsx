import { UIGrid, UIImageInput } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const ImageInput = () => {
  const [value, setValue] = useState(
    "https://book-eat-test.ru/book-eat/api/v1/files/images/e6f8b4753c8ae640f80a29789b5ad773.jpg",
  );

  return (
    <UIGrid>
      <UIImageInput title="Цена" value={value} onChange={setValue} />
      <UIImageInput title="Цена" value={value} onChange={setValue} />
    </UIGrid>
  );
};

const Renderer = () => {
  const [value, setValue] = useState(
    "https://book-eat-test.ru/book-eat/api/v1/files/images/e6f8b4753c8ae640f80a29789b5ad773.jpg",
  );

  return (
    <UIGrid>
      <UIImageInput title="Цена" value={value} onChange={setValue} />
      <UIImageInput title="Цена" value={value} onChange={setValue} />
    </UIGrid>
  );
};

type Story = StoryObj<typeof ImageInput>;

export const Test: Story = {
  render: Renderer,
};

const meta: Meta<typeof UIImageInput> = {
  component: UIImageInput,
};
export default meta;
