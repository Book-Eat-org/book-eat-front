import { FC, ReactNode } from "react";
import { Grid, theme, TrashIcon, Typography } from "@book-eat/ui";

interface IProps {
  children: ReactNode;
  onClick: () => void;
}
export const NavItem: FC<IProps> = (props) => {
  const { children, onClick } = props;
  return (
    <Grid
      gridTemplateColumns="auto max-content"
      padding="15px"
      backgroundColor={theme.colors.general30}
      borderRadius={10}
      onClick={onClick}
    >
      <Typography size="14/14" fontWeight={500}>
        {children}
      </Typography>
      <TrashIcon />
    </Grid>
  );
};
