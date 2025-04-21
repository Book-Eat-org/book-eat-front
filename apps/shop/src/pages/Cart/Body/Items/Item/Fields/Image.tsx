import { FC } from "react";
import { useData } from "../context.ts";
import { Image as UIImage } from "@book-eat/ui";

export const Image: FC = () => {
  const { product } = useData();
  const { mainImageUrl } = product;

  return (
    <UIImage
      src={mainImageUrl}
      size={400}
      width={80}
      height={80}
      style={{ borderRadius: "20px" }}
    />
  );
};
