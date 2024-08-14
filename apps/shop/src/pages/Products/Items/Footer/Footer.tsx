import { useSelector } from "react-redux";
import { Box, Button } from "@book-eat/ui";
import { useNavigate } from "react-router-dom";
import { cartSelector } from "../../../../store/cart";
import { navigateToPage, PageURLS } from "../../../../constants/urls.ts";

const Footer = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(cartSelector);

  if (cartItems.products.length === 0) {
    return null;
  }

  const onSubmit = () => navigate(navigateToPage(PageURLS.CART, {}));

  return (
    <Box
      position="fixed"
      bottom="20px"
      width="calc(100% - 2*15px)"
      onClick={onSubmit}
    >
      <Button width="100%">Продолжить</Button>
    </Box>
  );
};

export default Footer;
