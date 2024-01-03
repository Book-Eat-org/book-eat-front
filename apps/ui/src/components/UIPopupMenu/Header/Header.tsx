import UIGrid from "../../UIGrid";
import UIIconButton from "../../UIIconButton";
import { CloseIcon } from "$assets";
import { FC } from "react";
import styled from "@emotion/styled";
import Grid from "../../Grid";

interface IProps {
  onClose: () => void;
}

const SwipeLine = styled.div`
  background: #717171;
  width: 40px;
  height: 3px;
  margin-top: 2px;
  border-radius: 8px;
`;

const Header: FC<IProps> = ({ onClose }) => (
  <Grid gap={8} paddingRight={15}>
    <UIGrid justifyContent="center">
      <SwipeLine />
    </UIGrid>
    <UIGrid justifyContent="end">
      <UIIconButton Icon={CloseIcon} variant="secondary" onClick={onClose} />
    </UIGrid>
  </Grid>
);

export default Header;
