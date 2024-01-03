import styled from '@emotion/styled'
import {color, fontSize, space, width, padding, LayoutProps,PaddingProps} from 'styled-system'

const Box = styled.div<LayoutProps & PaddingProps>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${padding}
`

export default Box

