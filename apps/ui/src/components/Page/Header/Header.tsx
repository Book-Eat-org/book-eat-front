import Grid from "../../Grid";
import { ComponentProps, FC, ReactNode } from "react";
import Box from "../../Box";

interface IProps extends ComponentProps<typeof Box> {
  children: ReactNode;
  backgroundColor?: "white";
}
const Header: FC<IProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <Grid gap={6} padding="40px 15px" minHeight="45px" {...restProps}>
      {children}
    </Grid>
  );
};

export default Header;
