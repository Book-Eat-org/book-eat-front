import { UIGrid, UITypography} from "$components";
import {Meta, StoryObj} from "@storybook/react";

const Story=  () => <UIGrid colSizes="repeat(3,min-content)" gap="20px">
    <UITypography variant="textMd">Regular</UITypography>
    <UITypography variant="textMd" weight='semibold'>Semibold</UITypography>
    <UITypography variant="textMd" weight='bold'>Bold</UITypography>
    </UIGrid>



type Story = StoryObj<typeof UITypography>;

export const Weights: Story = {
    render:Story,
};

const meta: Meta<typeof UITypography> = {
    component: UITypography,
};
export default meta;
