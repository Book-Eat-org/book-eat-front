import { TStyledCommonProps } from "$models";
import { styledCommonFn } from "$utils";
import styled, {StyledComponent} from "@emotion/styled";
import React from "react";

const Row:StyledComponent<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    TStyledCommonProps
> = styled.div<TStyledCommonProps>`
  width: 100%;
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
  ${styledCommonFn}
`;

export default Row;
