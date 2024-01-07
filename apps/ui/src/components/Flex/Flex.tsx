import styled from "@emotion/styled";
import { FlexboxProps, flexbox } from "styled-system";
import { styledCommonFn } from "$utils";
import { TStyledCommonProps } from "$models";

interface IProps {
  gap?: number;
}

const Flex = styled.div<TStyledCommonProps & FlexboxProps & IProps>`
  ${styledCommonFn}
  ${flexbox}
  display:flex;
  gap: ${({ gap }) => (gap ? `${gap * 5}px` : undefined)};
`;

export default Flex;
