
import {UIButton, UIGrid} from "$components";
import {Meta, StoryObj} from "@storybook/react";


export const TestStories = () => {
    return (
        <UIButton>test</UIButton>
    )
}

const Sizes=  () => <UIGrid colSizes="repeat(2,100px)" gap="20px">
        <UIButton variant="primary">Primary</UIButton>
        <UIButton variant="secondary">Secondary</UIButton>
    </UIGrid>



type Story = StoryObj<typeof UIButton>;

export const Variants: Story = {
    render:Sizes,
};

const meta: Meta<typeof UIButton> = {
    component: UIButton,
};
export default meta;
