import { UIButton, UIPopupMenu } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export const PopupMenu = () => {
  const [opened, setOpened] = useState(false);

  const toggleChange = () => setOpened((value) => !value);

  return (
    <>
      <UIButton onClick={toggleChange}>Открыть</UIButton>
      {opened && (
        <UIPopupMenu onClose={toggleChange} >
       Привет, я попап
        </UIPopupMenu>
      )}
    </>
  );
};

type Story = StoryObj<typeof PopupMenu>;

export const Test: Story = {
  render: PopupMenu,
};

const meta: Meta<typeof UIPopupMenu> = {
  component: UIPopupMenu,
};
export default meta;
