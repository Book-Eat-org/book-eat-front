import { useSelector } from "$hooks";
import { Item } from "./Item";

export const Items = () => {
  const cartItems = useSelector((state) => state.cart);

  return cartItems.map((item) => (
    <Item id={item.productId} key={item.productId} />
  ));
};
