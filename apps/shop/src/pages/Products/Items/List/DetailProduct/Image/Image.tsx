import { useProduct } from "../hooks.ts";
import { Price } from "./Price";
import { Flex } from "@book-eat/ui";
import classes from "./Image.module.css";

export const Image = () => {
  const { mainImageUrl } = useProduct() ?? {};
  return (
    <Flex>
      <img
        src={
          mainImageUrl ??
          "https://archive.org/download/placeholder-image/placeholder-image.jpg"
        }
        alt=""
        className={classes.image}
      />
      <Price />
    </Flex>
  );
};
