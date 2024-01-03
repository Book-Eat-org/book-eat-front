
import {Box, Flex, UIButton} from "$components";
import {Meta, StoryObj} from "@storybook/react";


export const Base = () => {
    return (
        <Flex gap={3} px={2}><span>test</span><span>test</span></Flex>
    )
}


type Story = StoryObj<typeof UIButton>;

export const Variants: Story = {
    render:Base,
};

const meta: Meta<typeof Box> = {
    component: Box,
};
export default meta;
