import { FC, ReactNode } from "react";
import { Grid, theme, Typography } from "@book-eat/ui";

interface IProps {
  title: string;
  children: ReactNode;
}

export const Item: FC<IProps> = (props) => {
  const { title, children } = props;

  return (
    <Grid gap="3px" padding="5px 0 8px 0">
      <Typography size="12/12" color={theme.colors.general600}>
        {title}
      </Typography>
      <Typography size="16/16" color={theme.colors.general900}>
        {children ?? "—"}
      </Typography>
    </Grid>
  );
};
