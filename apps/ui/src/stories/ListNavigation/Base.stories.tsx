import { Box, Flex, Grid, ListNavigation } from "$components";
import { Meta, StoryObj } from "@storybook/react";

export const Base = () => {
  const items = [
    { id: "1", title: "Меню" },
    { id: "2", title: "Точки" },
    { id: "3", title: "Кассиры" },
  ];
  return (
    <ListNavigation.Provider>
      <Grid>
        <Flex>
          {items.map(({ id, title }) => (
            <ListNavigation.MenuNavItem id={id}>
              {title}
            </ListNavigation.MenuNavItem>
          ))}
        </Flex>
        <ListNavigation.ScrollContainer>
          <Grid>
            {items.map(({ id, title }) => (
              <ListNavigation.TargetItem id={id}>
                <Box height={800}>{title}</Box>
              </ListNavigation.TargetItem>
            ))}
          </Grid>
        </ListNavigation.ScrollContainer>
      </Grid>
    </ListNavigation.Provider>
  );
};

type Story = StoryObj<typeof Box>;

export const Variants: Story = {
  render: Base,
};

const meta: Meta<typeof Box> = {
  component: Box,
};
export default meta;
