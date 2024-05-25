import { Grid, IconButton } from "$components";
import { Meta } from "@storybook/react";
import { MinusIcon24, PlusIcon24 } from "$assets";
export const Variants = () => (
  <Grid gap={5}>
    <IconButton variant="primaryLight">
      <PlusIcon24 />
    </IconButton>
    <IconButton variant="primary">
      <MinusIcon24 />
    </IconButton>
  </Grid>
);

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};
export default meta;
