import { useSelector } from "react-redux";
import { cartSelector } from "../../../store/cart";
import { Box, Button } from "@book-eat/ui";
import { IProduct, menuSelectors } from "@book-eat/api";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "../../../constants/urls.ts";

const Footer = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(cartSelector);
  const products = useSelector((state) => menuSelectors.selectEntities(state));

  if (cartItems.length === 0) {
    return null;
  }

  const onSubmit = () => navigate(navigateToPage(PageURLS.CART, {}));

  const sum = cartItems.reduce((acc, curr) => {
    const product: IProduct = products[curr.productId];
    return acc + product.price * curr.col;
  }, 0);

  return (
    <Box
      position="fixed"
      bottom="20px"
      width="calc(100% - 2*15px)"
      onClick={onSubmit}
    >
      <Button width="100%">Продолжить {sum} р</Button>
    </Box>
  );
};

export default Footer;
