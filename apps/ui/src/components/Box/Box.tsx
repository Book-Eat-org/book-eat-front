import styled, {StyledComponent} from "@emotion/styled";

import type { TStyledCommonProps } from "$models";
import { styledCommonFn } from "$utils";
import React from "react";

const Box:StyledComponent<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    TStyledCommonProps
> = styled.div<TStyledCommonProps>`
  ${styledCommonFn}
`;

export default Box;
