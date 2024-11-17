import { useProduct } from "../hooks.ts";
import { Grid, theme, Typography } from "@book-eat/ui";
import { Addition } from "./Addition";
import { isEmpty } from "ramda";

export const Additions = () => {
  const item = useProduct();

  const { additionsIds = [] } = item;

  if (isEmpty(additionsIds)) {
    return null;
  }

  return (
    <Grid gap={2} background={theme.colors.general50} borderRadius={10} py={2}>
      <Typography size="14/14" fontWeight={600} pl={2}>
        Добавки
      </Typography>
      <Grid gap={1}>
        {additionsIds?.map((id) => <Addition id={id} key={id} />)}
      </Grid>
    </Grid>
  );
};
