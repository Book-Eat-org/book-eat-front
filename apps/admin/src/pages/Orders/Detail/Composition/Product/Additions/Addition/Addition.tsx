import { Flex, theme, Typography } from "@book-eat/ui";

export const Addition = () => (
  <Flex justifyContent="space-between" alignItems="center">
    <Typography size="14/14" color={theme.colors.general80}>
      Яблочный джем
    </Typography>
    <Typography size="14/14" color={theme.colors.general80}>
      50 р
    </Typography>
  </Flex>
);
