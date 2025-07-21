import styled, {StyledComponent} from "@emotion/styled";
import { FlexboxProps, flexbox } from "styled-system";
import { styledCommonFn } from "$utils";
import { TStyledCommonProps } from "$models";
import React from "react";

interface IProps {
  gap?: number;
}

type Props = TStyledCommonProps & FlexboxProps & IProps;

const Flex: StyledComponent<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Props
> = styled.div<Props>`
  ${styledCommonFn}
  ${flexbox}
  display:flex;
  gap: ${({ gap }) => (gap ? `${gap * 5}px` : undefined)};
`;

export default Flex;
