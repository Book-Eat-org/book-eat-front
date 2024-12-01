import styled from "@emotion/styled";
import { always, ifElse, propOr } from "ramda";

interface IProps {
  sticky: boolean;
}

const Content = styled.div<IProps>`
  overflow: auto;
  height: 100%;
  margin-top: 15px;
  padding: 0 15px
    ${ifElse(propOr(false, "sticky"), always("0px"), always("15px"))};
`;

export default Content;
