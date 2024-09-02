import { Grid } from "@book-eat/ui";
import { FC, ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
const Block: FC<IProps> = ({ children }) => (
  <Grid gap={9} width="100%">
    {children}
  </Grid>
);

export default Block;
