import { FC } from "react";

import { DAYS_ITEMS } from "$constants";

import { Flex } from "@book-eat/ui";

import { Day } from "./Day/Day.tsx";

export const Days: FC = () => {
  return (
    <Flex colSizes={`repeat(${DAYS_ITEMS.length},1fr)`} gap={2}>
      {DAYS_ITEMS.map(({ id }) => (
        <Day day={id} key={id} />
      ))}
    </Flex>
  );
};
