
import {UIButton} from "$components";
import {Meta, StoryObj} from "@storybook/react";


export const TestStories = () => {
    return (
        <UIButton>test</UIButton>
    )
}

const Sizes=  () => <div>
        <UIButton variant="primary">Тест 1</UIButton>
        <UIButton variant="secondary">Тест 2</UIButton>
    </div>



type Story = StoryObj<typeof UIButton>;

export const Test: Story = {
    render:Sizes,
};

const meta: Meta<typeof UIButton> = {
    component: UIButton,
};
export default meta;
