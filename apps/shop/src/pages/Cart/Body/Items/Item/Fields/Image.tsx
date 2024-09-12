import { FC } from "react";
import { useData } from "../context.ts";

export const Image: FC = () => {
  const { product } = useData();
  const { mainImageUrl } = product;

  return (
    <img
      src={mainImageUrl}
      alt=""
      width={80}
      height={80}
      style={{ borderRadius: "20px" }}
    />
  );
};
