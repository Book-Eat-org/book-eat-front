import { FC, ReactNode } from "react";
import { Grid, Typography } from "@book-eat/ui";
import { theme } from "@book-eat/ui";

interface IProps {
  title: string;
  children: ReactNode;
}

export const Item: FC<IProps> = (props) => {
  const { title, children } = props;

  return (
    <Grid gap={1}>
      <Typography size="12/12" fontWeight={600}>
        {title}
      </Typography>
      <Typography size="14/14" color={theme.colors.general80}>
        {children}
      </Typography>
    </Grid>
  );
};
