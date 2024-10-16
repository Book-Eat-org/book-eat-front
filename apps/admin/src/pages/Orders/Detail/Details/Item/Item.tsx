import { FC, ReactNode } from "react";
import { Grid, Typography } from "@book-eat/ui";
import { theme } from "@book-eat/ui";

interface IProps {
  title: string;
  children: ReactNode;
  gray?: boolean;
}

export const Item: FC<IProps> = (props) => {
  const { title, children, gray } = props;

  return (
    <Grid gap={1}>
      <Typography size="12/12" fontWeight={600}>
        {title}
      </Typography>
      <Typography
        size="14/14"
        color={gray ? theme.colors.general600 : undefined}
      >
        {children}
      </Typography>
    </Grid>
  );
};
