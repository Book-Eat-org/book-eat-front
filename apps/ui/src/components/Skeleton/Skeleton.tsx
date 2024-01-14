import Grid from "../Grid";
import { FC } from "react";
import { LayoutProps } from "styled-system";
import Row from "./Row.tsx";

interface IProps extends LayoutProps {
  count?: number;
  gap?: number;
}

const Skeleton: FC<IProps> = (props) => {
  const { gap, count = 1, ...rest } = props;
  const array = Array.from(Array(count).keys());

  return (
    <Grid gap={gap}>
      {array.map((id) => (
        <Row key={id} {...rest} />
      ))}
    </Grid>
  );
};

export default Skeleton;
