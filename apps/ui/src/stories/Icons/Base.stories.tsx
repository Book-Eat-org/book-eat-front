import { Flex, Grid, UITypography } from "$components";
import { Meta, StoryObj } from "@storybook/react";
import {
  BrowsIcon,
  BurgerMenuIcon,
  CloseIcon,
  ConnectIcon,
  DownArrowIcon,
  EyeIcon,
  LeftArrowIcon,
  MenuIcon,
  OrdersIcon,
  PDFIcon,
  PencilIcon,
  PlusIcon,
  PlusIcon10,
  RightArrowIcon,
  ShopsIcon,
  TrashIcon,
} from "$assets";

const SVGS = [
  BrowsIcon,
  BurgerMenuIcon,
  CloseIcon,
  DownArrowIcon,
  EyeIcon,
  LeftArrowIcon,
  PDFIcon,
  PencilIcon,
  PlusIcon,
  PlusIcon10,
  RightArrowIcon,
  TrashIcon,
];

const MenuIcons = [ConnectIcon, MenuIcon, OrdersIcon, ShopsIcon];
export const Base = () => {
  return (
    <Grid gap={8}>
      <Grid gridTemplateColumns="repeat(5,1fr)" gap={3}>
        {SVGS.map((Icon) => (
          <Grid key={Icon.name}>
            <Icon />
            <UITypography variant="textMd">{Icon.name}</UITypography>
          </Grid>
        ))}
      </Grid>
      <Grid gridTemplateColumns="repeat(5,1fr)" gap={3}>
        {MenuIcons.map((Icon) => (
          <Grid key={Icon.name}>
            <Icon />
            <UITypography variant="textMd">{Icon.name}</UITypography>
          </Grid>
        ))}
      </Grid>
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
