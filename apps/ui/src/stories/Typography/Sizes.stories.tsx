import { Typography, UIGrid } from "$components";
import { Meta } from "@storybook/react";

export const Sizes = () => (
  <UIGrid gap="20px">
    <Typography size="26/32">26/32</Typography>
    <Typography size="20/24">20/24</Typography>
    <Typography size="14/16">14/16</Typography>
    <Typography size="14/14">14/14</Typography>
    <Typography size="12/14">12/14</Typography>
    <Typography size="12/12">12/12</Typography>
    <Typography size="10/12">10/12</Typography>
  </UIGrid>
);

const meta: Meta<typeof Typography> = {
  component: Typography,
};
export default meta;
