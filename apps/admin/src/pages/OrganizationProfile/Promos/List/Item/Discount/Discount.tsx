import { Flex, theme, Typography } from "@book-eat/ui";

export const Discount = () => {
  return (
    <Flex
      borderRadius={5}
      px={2}
      py={1}
      gap={1}
      background={theme.colors.accent500}
    >
      <Typography fontWeight={600} size="12/12" color={theme.colors.general50}>
        - 5%
      </Typography>
    </Flex>
  );
};
