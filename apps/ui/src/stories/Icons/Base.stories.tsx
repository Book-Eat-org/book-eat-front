import { Flex, Grid, UITypography } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import * as AssetsComponents from "$assets";
import { values } from "ramda";

export const Base = () => {
  const Components = values(AssetsComponents);
  const ReactComponents = Components.filter(
    (Component) => typeof Component === "function",
  );
  return (
    <Grid gridTemplateColumns="repeat(5,1fr)" gap={3}>
      {ReactComponents.map((Icon) => (
        <Grid key={Icon.displayName}>
          <Icon />
          <UITypography variant="textMd">{Icon.displayName}</UITypography>
        </Grid>
      ))}
    </Grid>
  );
};

type Story = StoryObj<typeof Flex>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof Flex> = {
  component: Flex,
};
export default meta;
