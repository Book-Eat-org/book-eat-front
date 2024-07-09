import { FC } from "react";
import { useData } from "../context.ts";
import { Flex, Typography } from "@book-eat/ui";
import { innerJoin, isEmpty, isNil } from "ramda";

export const Additions: FC = () => {
  const { cart, product } = useData();

  const { additionIds } = cart;

  if (isNil(additionIds) || isEmpty(additionIds)) {
    return null;
  }

  const additions = innerJoin(
    ({ id }, additionId) => id === additionId,
    product.additions ?? [],
    additionIds,
  );

  return additions.map(({ price, title }) => (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex gap={2}>
        <Typography>•</Typography>
        <Typography>{title}</Typography>
      </Flex>
      <Typography>{price}</Typography>
    </Flex>
  ));
};
