import styled from "@emotion/styled";

import type { TStyledCommonProps } from "$models";
import { styledCommonFn } from "$utils";

const Box = styled.div<TStyledCommonProps>`
  ${styledCommonFn}
`;

export default Box;
