import { FC } from "react";
import classes from "./Suggestions.module.css";
import { Grid } from "$components";
import { useAddressContext } from "../context.ts";
import { Item } from "./Item/Item.tsx";

export const Suggestions: FC = () => {
  const { suggestions } = useAddressContext();

  return (
    <div className={classes.wrapper}>
      <Grid gap={3}>
        {suggestions.map(({ value }) => (
          <Item value={value} />
        ))}
      </Grid>
    </div>
  );
};
