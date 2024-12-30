import { useProduct } from "../hooks.ts";
import { Price } from "./Price";
import { Flex, Image as UIImage } from "@book-eat/ui";
import classes from "./Image.module.css";

export const Image = () => {
  const { mainImageUrl } = useProduct() ?? {};
  return (
    <Flex>
      <UIImage src={mainImageUrl} size={800} className={classes.image} />
      <Price />
    </Flex>
  );
};
