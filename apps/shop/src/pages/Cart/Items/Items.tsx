import { useSelector } from "$hooks";
import { Item } from "./Item";
import { keys } from "ramda";

export const Items = () => {
  const cartItems = useSelector((state) => state.cart);

  const cartItemsIds = keys(cartItems.items);

  return cartItemsIds.map((id) => <Item id={id} key={id} />);
};
