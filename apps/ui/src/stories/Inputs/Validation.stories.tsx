import { UIGrid, UIInput } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const Validation = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <UIGrid>
      <UIInput
        title="Заголовок"
        placeholder="Введите текст"
        value={value}
        error="Ошибка, проверьте значение"
        onChange={setValue}
      />
    </UIGrid>
  );
};

type Story = StoryObj<typeof Validation>;

export const Test: Story = {
  render: Validation,
};

const meta: Meta<typeof UIInput> = {
  component: UIInput,
};
export default meta;
