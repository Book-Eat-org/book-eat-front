import { FC, ReactNode } from "react";
import { Grid, theme, Typography } from "@book-eat/ui";

interface IProps {
  title: string;
  children: ReactNode;
}

export const Item: FC<IProps> = (props) => {
  const { title, children } = props;

  return (
    <Grid gap={1}>
      <Typography size="12/12" color={theme.colors.general90}>
        {title}
      </Typography>
      <Typography size="16/16">{children ?? "—"}</Typography>
    </Grid>
  );
};
