import { useProduct } from "../hooks.ts";
import { Grid } from "@book-eat/ui";
import { Addition } from "./Addition";

export const Additions = () => {
  const item = useProduct();

  const { additions } = item;

  return (
    <Grid gap={3}>{additions?.map(({ id }) => <Addition id={id} />)}</Grid>
  );
};
