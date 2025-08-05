import { useSelector } from "$hooks";
import { EntityId } from "@reduxjs/toolkit";
import { Box, Button } from "@book-eat/ui";
import { useNavigate, useParams } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";
import { isEmpty } from "ramda";

const Footer = () => {
  const navigate = useNavigate();
  const { id: shopId } = useParams() as { id: EntityId };
  const cartItems = useSelector((state) => state.cart);
  const onSubmit = () => navigate(navigateToPage(PageURLS.CART, { id: shopId }));
  
  if (isEmpty(cartItems) || shopId !== cartItems.shopId || isEmpty(cartItems.items)) return null;

  return (
    <Box
      position="fixed"
      bottom="20px"
      left="15px"
      right="15px"
      onClick={onSubmit}
    >
      <Button width="100%">Продолжить</Button>
    </Box>
  );
};

export default Footer;
