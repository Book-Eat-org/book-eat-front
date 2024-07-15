import { useSelector } from "react-redux";
import { Box, Button } from "@book-eat/ui";
import {
  createMenuSelectorsByPlaceId,
  IProduct,
  menuEndpoints,
} from "@book-eat/api";
import { useNavigate, useParams } from "react-router-dom";
import { cartSelector } from "../../../../store/cart";
import { navigateToPage, PageURLS } from "../../../../constants/urls.ts";

const Footer = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(cartSelector);
  const { id } = useParams();

  const { isFetching } = menuEndpoints.useGetMenuByPlaceIdQuery(id!);

  const selectors = createMenuSelectorsByPlaceId(cartItems.shopId!);

  const products = useSelector(selectors.selectEntities);

  if (cartItems.products.length === 0 || isFetching) {
    return null;
  }

  const onSubmit = () => navigate(navigateToPage(PageURLS.CART, {}));

  const sum = cartItems.products.reduce((acc, curr) => {
    const product: IProduct = products[curr.id];
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
