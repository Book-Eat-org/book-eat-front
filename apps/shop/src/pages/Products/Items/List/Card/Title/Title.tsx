import { useCard } from "../../../context.ts";
import { Typography } from "@book-eat/ui";
import { FC } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  id: EntityId;
}

const Title: FC<IProps> = ({ id }) => {
  const { title } = useCard(id);

  return (
    <Typography size="14/14" fontWeight={600}>
      {title}
    </Typography>
  );
};

export default Title;
