import { Flex, Typography, UICheckbox, theme } from "@book-eat/ui";
import { SYMBOLS } from "@book-eat/utils";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { isNil, isNotNil } from "ramda";
import { useCardContext } from "../../context.ts";
import { useSelector } from "$hooks";
import { additionsSelectors } from "../../../../../../store/entities";
import { Counter } from "./Counter";

interface IProps {
  id: EntityId;
}

export const Addition: FC<IProps> = (props) => {
  const { id } = props;

  const item = useSelector((state) => additionsSelectors.selectById(state, id));

  const { additions, setAddition } = useCardContext();

  if (isNil(item)) {
    return null;
  }

  const { weight, title, price } = item;

  const onChange = (value: boolean) =>
    value ? setAddition({ id, count: 1 }) : setAddition({ id, count: 0 });

  const weightLabel = isNil(weight) ? undefined : `${weight} г`;

  const titleLabel = [title, weightLabel].filter(isNotNil).join(", ");

  const selected = additions[id]?.count > 0;

  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      key={id}
      borderBottom={`1px solid ${theme.colors.general200}`}
      padding="10px 0"
    >
      <Flex gap={2} alignItems="center">
        <UICheckbox onChange={onChange} selected={selected} />
        <Typography>{titleLabel}</Typography>
      </Flex>
      <Counter additionId={id} />
      <Typography>
        {price} {SYMBOLS.RUB}
      </Typography>
    </Flex>
  );
};
