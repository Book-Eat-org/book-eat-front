import { Button, Grid } from "$components";
import { Meta } from "@storybook/react";
export const Variants = () => (
  <Grid gap={5}>
    <Button variant="primary">Primary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="gray">Gray</Button>
  </Grid>
);

export const Sizes = () => (
  <Grid gap={5}>
    <Button size="xl">xl</Button>
    <Button size="lg">lg</Button>
    <Button size="md">md</Button>
    <Button size="sm">sm</Button>
    <Button size="xs">xs</Button>
  </Grid>
);

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;
