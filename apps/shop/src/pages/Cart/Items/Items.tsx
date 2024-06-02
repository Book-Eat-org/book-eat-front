import { useSelector } from "$hooks";
import { Item } from "./Item";

export const Items = () => {
  const cartItems = useSelector((state) => state.cart);

  return cartItems.products.map((item) => <Item id={item.id} key={item.id} />);
};
