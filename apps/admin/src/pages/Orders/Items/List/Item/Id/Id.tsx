import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { theme, Typography } from "@book-eat/ui";

interface IProps {
  id: EntityId;
}

export const Id: FC<IProps> = ({ id }) => {
  return (
    <Typography fontWeight={700} size="14/14" color={theme.colors.general90}>
      №{String(id).slice(0, 6)}
    </Typography>
  );
};
