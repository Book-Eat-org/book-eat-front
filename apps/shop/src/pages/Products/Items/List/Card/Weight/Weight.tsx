import { useCard } from "../../../context.ts";
import { Typography, theme } from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { isNil } from "ramda";

interface IProps {
  id: EntityId;
}

const Weight: FC<IProps> = ({ id }) => {
  const { weight } = useCard(id);

  if (isNil(weight)) {
    return null;
  }

  return (
    <Typography size="12/12" color={theme.colors.general600}>
      {weight} г
    </Typography>
  );
};

export default Weight;
