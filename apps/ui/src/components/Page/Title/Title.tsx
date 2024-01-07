import { FC, ReactNode } from "react";
import { Grid, UITypography } from "$components";

interface IProps {
  children: ReactNode;
  right?: ReactNode;
}
const Title: FC<IProps> = (props) => {
  const { children, right } = props;
  return (
    <Grid gridTemplateColumns="1fr min-content" gap={2}>
      <UITypography variant="displayXl" weight="bold">
        {children}
      </UITypography>
      {right}
    </Grid>
  );
};

export default Title;
