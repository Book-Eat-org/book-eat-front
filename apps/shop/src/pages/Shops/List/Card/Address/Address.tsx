import { useData } from "../context.ts";
import { FC } from "react";
import { Grid, Typography } from "@book-eat/ui";

export const Address: FC = () => {
  const { info, title } = useData();

  return (
    <Grid padding="5px 10px 10px" gap={1}>
      <Typography size="18/18" fontWeight={700}>
        {title}
      </Typography>
      <Typography size="12/12">{info.address}</Typography>
    </Grid>
  );
};
