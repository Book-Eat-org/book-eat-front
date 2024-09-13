import { FC, ReactNode } from "react";
import { ArrowRightIcon24, Grid, theme, Typography } from "@book-eat/ui";

interface IProps {
  children: ReactNode;
  onClick: () => void;
}
export const NavItem: FC<IProps> = (props) => {
  const { children, onClick } = props;
  return (
    <Grid
      gridTemplateColumns="auto max-content"
      alignItems="center"
      padding="15px"
      backgroundColor={theme.colors.general50}
      borderRadius={10}
      onClick={onClick}
    >
      <Typography size="14/14" fontWeight={500} textTransform="uppercase">
        {children}
      </Typography>
      <ArrowRightIcon24 />
    </Grid>
  );
};
