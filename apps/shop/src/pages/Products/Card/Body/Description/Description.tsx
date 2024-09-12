import { Flex, Grid, theme, Typography } from "@book-eat/ui";
import { useState } from "react";
import { useProduct } from "../hooks.ts";

export const Description = () => {
  const [descriptionActive, setDescriptionActive] = useState<boolean>(true);

  const { description, ingredients } = useProduct();

  const setDescriptionTrue = () => setDescriptionActive(true);
  const setDescriptionFalse = () => setDescriptionActive(false);

  return (
    <Grid
      gap={1}
      background={theme.colors.general50}
      padding={10}
      borderRadius={10}
    >
      <Flex gap={8}>
        <Typography
          textDecoration="underline"
          color={descriptionActive ? undefined : theme.colors.general600}
          onClick={setDescriptionTrue}
          cursor="pointer"
        >
          Описание
        </Typography>
        <Typography
          textDecoration="underline"
          color={descriptionActive ? theme.colors.general600 : undefined}
          onClick={setDescriptionFalse}
          cursor="pointer"
        >
          Состав
        </Typography>
      </Flex>
      <Typography>{descriptionActive ? description : ingredients}</Typography>
    </Grid>
  );
};
