import styled from "@emotion/styled";
import { always, ifElse, propOr } from "ramda";

interface IProps {
  sticky: boolean;
  mode: string;
}

const Content = styled.div<IProps>`
  overflow: auto;
  ${({ mode }) => mode === "product" ? `
    padding: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  ` : `
    margin-top: 60px;
    padding: 0 20px 20px;
  `}

  padding-right: ${ifElse(propOr(false, "sticky"), always("0px"), always("15px"))};
`;

export default Content;
