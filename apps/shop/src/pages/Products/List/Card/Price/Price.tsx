import { useCard } from "../../../context.ts";
import { Typography } from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  id: EntityId;
}

const Price: FC<IProps> = ({ id }) => {
  const { price } = useCard(id);

  return (
    <Typography size="14/16" fontWeight={600}>
      {price} ₽
    </Typography>
  );
};

export default Price;
