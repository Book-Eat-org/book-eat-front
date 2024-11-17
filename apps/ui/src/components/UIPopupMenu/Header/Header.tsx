import UIGrid from "../../UIGrid";
import UIIconButton from "../../UIIconButton";
import { CloseIcon } from "$assets";
import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import Grid from "../../Grid";
import Flex from "../../Flex";

interface IProps {
  onClose: () => void;
  withoutCurtain?: boolean;
  children?: ReactNode;
}

const SwipeLine = styled.div`
  background: #717171;
  width: 40px;
  height: 3px;
  margin-top: 2px;
  border-radius: 8px;
`;

const Header: FC<IProps> = ({ onClose, withoutCurtain, children }) => (
  <Grid gap={8} paddingRight={15}>
    {!withoutCurtain && (
      <UIGrid justifyContent="center">
        <SwipeLine />
      </UIGrid>
    )}
    <Flex
      justifyContent={children ? "space-between" : "end"}
      alignItems="center"
    >
      {children}
      <UIIconButton Icon={CloseIcon} variant="secondary" onClick={onClose} />
    </Flex>
  </Grid>
);

export default Header;
