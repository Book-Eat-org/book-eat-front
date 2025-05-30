import { FC } from "react";
import { useData } from "../context.ts";
import { Flex, Grid, Typography, theme } from "@book-eat/ui";
import { isEmpty, isNil } from "ramda";
import { getAdditionTitle, SYMBOLS } from "@book-eat/utils/src";

export const Additions: FC = () => {
  const { additions } = useData();

  if (isNil(additions) || isEmpty(additions)) {
    return null;
  }

  return (
    <Grid color={theme.colors.general600}>
      <Typography fontWeight={600} size="14/14">
        Добавки:
      </Typography>
      <Grid width="100%">
        {additions.map(({ title, col, price }) => (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid #D9D9D9"
            p={2}
            gap={2}
          >
            <Flex gap={2} alignItems="center">
              <Typography size="14/14">x{col}</Typography>
              <Typography size="14/14">{title}</Typography>
            </Flex>
            <Typography whiteSpace="nowrap" size="14/14">
              {price * col} {SYMBOLS.RUB}
            </Typography>
          </Flex>
        ))}
      </Grid>
    </Grid>
  );
};
