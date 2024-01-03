import styled from "@emotion/styled";
import Grid from "../Grid";
import { FC } from "react";
import { height, LayoutProps, PaddingProps } from "styled-system";

const Row = styled.div<LayoutProps & PaddingProps>`
  width: 100%;
  ${height};
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

interface IProps extends LayoutProps {
  count?: number;
  gap?: number;
}

const Skeleton: FC<IProps> = (props) => {
  const { gap, count, ...rest } = props;
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
