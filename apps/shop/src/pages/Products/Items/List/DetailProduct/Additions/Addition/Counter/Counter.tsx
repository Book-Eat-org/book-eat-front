import {
  Flex,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  Typography,
} from "@book-eat/ui";
import { FC } from "react";
import { useCardContext } from "../../../context.ts";
import { isNil } from "ramda";
import { EntityId } from "@reduxjs/toolkit";

interface IProps {
  additionId: EntityId;
}

export const Counter: FC<IProps> = (props) => {
  const { additionId } = props;
  const { additions, setAddition } = useCardContext();
  const item = additions[additionId];

  if (isNil(item) || item.count === 0) {
    return null;
  }

  const { count } = item;

  const decrementCol = () => {
    setAddition({ id: additionId, count: count - 1 });
  };

  const incrementCol = () => {
    setAddition({ id: additionId, count: count + 1 });
  };

  return (
    <Flex gap={4} justifyContent="space-between" alignItems="center">
      <IconButton onClick={decrementCol}>
        <MinusIcon24 />
      </IconButton>
      <Typography size="14/14">{count}</Typography>
      <IconButton onClick={incrementCol}>
        <PlusIcon24 />
      </IconButton>
    </Flex>
  );
};
