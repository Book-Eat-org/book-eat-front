import styled from "@emotion/styled";
import { always, ifElse, propOr } from "ramda";

interface IProps {
  sticky: boolean;
}

const Content = styled.div<IProps>`
  overflow: auto;
    ${ifElse(propOr(false, "sticky"), always("0px"), always("15px"))};
`;

export default Content;
