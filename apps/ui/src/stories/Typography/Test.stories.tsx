import { UIGrid, UITypography} from "$components";
import {Meta, StoryObj} from "@storybook/react";

const Story=  () => <UIGrid gap="20px">
    <UITypography variant="displayXl">displayXl (26/26)</UITypography>
    <UITypography variant="textXl">textXl (20/20)</UITypography>
    <UITypography variant="textMd">textMd (14/14)</UITypography>
    <UITypography variant="textXs">textXs (12/12)</UITypography>
    <UITypography variant="captionMd">captionMd (11/11)</UITypography>
    <UITypography variant="captionXs">captionXs (10/12)</UITypography>
    </UIGrid>



type Story = StoryObj<typeof UITypography>;

export const Variants: Story = {
    render:Story,
};

const meta: Meta<typeof UITypography> = {
    component: UITypography,
};
export default meta;
