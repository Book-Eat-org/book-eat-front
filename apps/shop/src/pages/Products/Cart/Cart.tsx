import { Box, Flex, CartIcon24, theme, Typography } from "@book-eat/ui";
import { FC } from "react";
import { useSelector } from "$hooks";
import { navigateToPage, PageURLS } from "../../../constants/urls.ts";
import { useNavigate } from "react-router-dom";

export const Cart: FC = () => {
  const navigate = useNavigate();
  const items = useSelector((store) => store.cart);

  const col = items.reduce((acc, curr) => acc + curr.col ?? 0, 0);

  const onSubmit = () => navigate(navigateToPage(PageURLS.CART, {}));

  return (
    <Flex
      backgroundColor={theme.colors.primary90}
      borderRadius={10}
      padding="6px"
      onClick={onSubmit}
    >
      {col > 0 && (
        <Box
          backgroundColor={theme.colors.general30}
          borderRadius="50%"
          padding="5px 10px"
          position="absolute"
          bottom={-10}
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
