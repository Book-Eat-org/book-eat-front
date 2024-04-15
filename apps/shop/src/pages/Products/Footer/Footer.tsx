import { useSelector } from "react-redux";
import { cartSelector } from "../../../store/cart";
import { Box, Button } from "@book-eat/ui";

const Footer = () => {
  const cartItems = useSelector(cartSelector);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <Box position="fixed" bottom="20px">
      <Button>Продолжить</Button>
    </Box>
  );
};

export default Footer;
