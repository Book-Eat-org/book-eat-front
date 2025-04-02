import { useSelector } from "react-redux";
import { Box, Button } from "@book-eat/ui";
import { useNavigate } from "react-router-dom";
import { cartSelector } from "../../../../store/cart";
import { navigateToPage, PageURLS } from "$constants";
import { isEmpty } from "ramda";

const Footer = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(cartSelector);

  if (isEmpty(cartItems.items)) {
    return null;
  }

  const onSubmit = () => navigate(navigateToPage(PageURLS.CART, {}));

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
