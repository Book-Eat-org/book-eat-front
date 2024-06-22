import { useMenuData } from "../context.ts";
import { Flex } from "@book-eat/ui";
import { Discount } from "./Discount.tsx";

export const Image = () => {
  const { mainImageUrl } = useMenuData();

  return (
    <Flex>
      <img
        src={mainImageUrl}
        alt=""
        width={80}
        height={80}
        style={{ borderRadius: "15px" }}
      />
      <Discount />
    </Flex>
  );
};
