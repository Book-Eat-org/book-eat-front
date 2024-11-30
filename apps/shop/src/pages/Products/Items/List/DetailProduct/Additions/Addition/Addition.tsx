import {
  Flex,
  Typography,
  theme,
  IconButton,
  PlusIcon24,
  Grid,
} from "@book-eat/ui";
import { SYMBOLS } from "@book-eat/utils";
import { EntityId } from "@reduxjs/toolkit";
import { FC } from "react";
import { isNil, isNotNil } from "ramda";
import { useCardContext } from "../../context.ts";
import { useSelector } from "$hooks";
import { additionsSelectors } from "../../../../../../../store/entities";
import { Counter } from "./Counter";
import { MEASURES_CONFIG } from "@book-eat/utils";

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

  const { weight, title, price, measure } = item;

  const onChange = () => setAddition({ id, count: 1 });

  const weightLabel = isNil(weight)
    ? undefined
    : `${weight}${MEASURES_CONFIG[measure] ?? ""}`;
  const additionCount = additions[id]?.count;

  const selected = additionCount > 0;

  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      key={id}
      borderBottom={`1px solid ${theme.colors.general200}`}
      padding="10px 15px 10px 10px"
      gap={1}
      background={selected ? theme.colors.general200 : undefined}
    >
      <Flex gap={2}>
        {selected ? (
          <Counter additionId={id} />
        ) : (
          <IconButton onClick={onChange}>
            <PlusIcon24 />
          </IconButton>
        )}
        <Grid gap={1}>
          <Typography
            size="14/14"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {title}
          </Typography>
          {isNotNil(weightLabel) && (
            <Typography size="14/14" color={theme.colors.general600}>
              {weightLabel}
            </Typography>
          )}
        </Grid>
      </Flex>
      <Typography whiteSpace="nowrap">
        {price * (additionCount ?? 1)} {SYMBOLS.RUB}
      </Typography>
    </Flex>
  );
};
