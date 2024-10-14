import { useMenuData } from "../context.ts";
import { Flex, Image as ImageUI } from "@book-eat/ui";
import { Discount } from "./Discount.tsx";

export const Image = () => {
  const { mainImageUrl } = useMenuData();

  return (
    <Flex>
      <ImageUI
        src={mainImageUrl}
        size={400}
        width={80}
        height={80}
        style={{ borderRadius: "15px" }}
      />
      <Discount />
    </Flex>
  );
};
