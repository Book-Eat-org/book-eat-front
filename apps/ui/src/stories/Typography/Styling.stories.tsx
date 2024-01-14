import { Typography, UIGrid } from "$components";
import { Meta } from "@storybook/react";

export const Coloring = () => (
  <UIGrid gap="20px">
    <Typography color="primary">Text color</Typography>
  </UIGrid>
);

const meta: Meta<typeof Typography> = {
  component: Typography,
};
export default meta;
