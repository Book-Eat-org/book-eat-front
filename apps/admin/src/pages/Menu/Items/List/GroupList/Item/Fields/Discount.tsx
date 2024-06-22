import { useMenuData } from "../context.ts";
import { Box, theme, Typography } from "@book-eat/ui";

export const Discount = () => {
  const { discount } = useMenuData();

  if (!discount) {
    return null;
  }

  return (
    <Box
      alignItems="center"
      borderRadius={15}
      padding="5px 8px"
      position="absolute"
      backgroundColor={theme.colors.red100}
      top="10px"
      left="13px"
    >
      <Typography color={theme.colors.general30} size="10/10">
        -{discount} %
      </Typography>
    </Box>
  );
};
