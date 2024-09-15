import { Flex, Typography, UICheckbox } from "@book-eat/ui";
import { SYMBOLS } from "@book-eat/utils";
import { useProduct } from "../../hooks.ts";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { isNil, isNotNil } from "ramda";
import { useCardContext } from "../../context.ts";

interface IProps {
  id: EntityId;
}

export const Addition: FC<IProps> = (props) => {
  const { id } = props;
  const product = useProduct();

  const { additions } = product;

  const item = additions.find((addition) => addition.id === id);

  const { additionsIds, setAdditionsIds } = useCardContext();

  if (isNil(item)) {
    return null;
  }

  const { weight, title, price } = item;

  const onChange = (value: boolean) =>
    value
      ? setAdditionsIds([...additionsIds, id])
      : setAdditionsIds(additionsIds.filter((item) => item !== id));

  const weightLabel = isNil(weight) ? undefined : `{weight} г`;

  const titleLabel = [title, weightLabel].filter(isNotNil).join(", ");

  return (
    <Flex justifyContent="space-between" alignItems="center" key={id}>
      <Flex gap={2} alignItems="center">
        <UICheckbox onChange={onChange} selected={additionsIds.includes(id)} />
        <Typography>{titleLabel}</Typography>
      </Flex>
      <Typography>
        {price} {SYMBOLS.RUB}
      </Typography>
    </Flex>
  );
};
