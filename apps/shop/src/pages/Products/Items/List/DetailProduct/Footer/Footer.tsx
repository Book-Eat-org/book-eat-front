import {
  Button,
  Flex,
  IconButton,
  MinusIcon24,
  PlusIcon24,
  theme,
  Typography,
} from "@book-eat/ui";
import { getPriceWithDiscount, SYMBOLS } from "@book-eat/utils";
import { FC } from "react";
import { keys } from "ramda";
import { useCardContext } from "../context.ts";
import { useSelector } from "$hooks";
import { additionsSelectors } from "../../../../../../store/entities";
import { useProduct } from "../hooks.ts";

interface IProps {
  submit: () => void;
  decrementCol: () => void;
  incrementCol: () => void;
  col: number;
}

export const Footer: FC<IProps> = (props) => {
  const { incrementCol, col, decrementCol, submit } = props;
  const { additions } = useCardContext();
  const item = useProduct();
  const { price, discount } = item;

  const additionsStore = useSelector(additionsSelectors.selectAll);

  const additionsSum =
    keys(additions).reduce((acc: number, curr) => {
      const addition = additionsStore.find((item) => item.id === curr)!;
      return acc + addition.price * (additions[curr]?.count ?? 1);
    }, 0) * col;

  const totalPrice = col * getPriceWithDiscount(price, discount) + additionsSum;

  return (
    <Flex
      gap={8}
      position="fixed"
      width="100%"
      p={15}
      bottom={0}
      left={0}
      right={0}
      background={theme.colors.general200}
    >
      <Flex gap={4} justifyContent="space-between" alignItems="center">
        <IconButton onClick={decrementCol} disabled={col === 1}>
          <MinusIcon24 />
        </IconButton>
        <Typography size="14/14">{col}</Typography>
        <IconButton onClick={incrementCol}>
          <PlusIcon24 />
        </IconButton>
      </Flex>
      <Button onClick={submit} width="100%">
        Добавить {totalPrice} {SYMBOLS.RUB}
      </Button>
    </Flex>
  );
};
