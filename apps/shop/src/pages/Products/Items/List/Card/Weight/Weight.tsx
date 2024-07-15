import { useCard } from "../../../context.ts";
import { Typography, theme } from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  id: EntityId;
}

const Weight: FC<IProps> = ({ id }) => {
  const { weight } = useCard(id);

  return (
    <Typography size="12/12" color={theme.colors.general80}>
      {weight} г
    </Typography>
  );
};

export default Weight;
