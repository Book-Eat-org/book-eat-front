import { useProduct } from "../hooks.ts";
import { Price } from "./Price";
import { Flex } from "@book-eat/ui";

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
        style={{ height: 194, width: "100%" }}
      />
      <Price />
    </Flex>
  );
};
