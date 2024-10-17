import { Box, Flex, CartIcon24, theme, Typography } from "@book-eat/ui";
import { FC } from "react";
import { useSelector } from "$hooks";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "../../../../constants/urls.ts";
import { keys } from "ramda";

export const Cart: FC = () => {
  const navigate = useNavigate();
  const items = useSelector((store) => store.cart);

  const col = keys(items.items).length;

  const onSubmit = () => navigate(navigateToPage(PageURLS.CART, {}));

  return (
    <Flex
      backgroundColor={theme.colors.accent50}
      borderRadius={10}
      padding="9px"
      onClick={onSubmit}
    >
      {col > 0 && (
        <Box
          backgroundColor={theme.colors.general50}
          borderRadius="50%"
          padding="3px 10px"
          position="absolute"
          bottom={-8}
          left={-8}
          zIndex={1}
        >
          <Typography size="14/14" fontWeight={600}>
            {col}
          </Typography>
        </Box>
      )}
      <CartIcon24 />
    </Flex>
  );
};
