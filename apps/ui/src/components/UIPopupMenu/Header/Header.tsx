import UIIconButton from "../../UIIconButton";
import { CloseIcon } from "$assets";
import { FC, ReactNode } from "react";
import Grid from "../../Grid";
import Flex from "../../Flex";

interface IProps {
  onClose: () => void;
  children?: ReactNode;
}

const Header: FC<IProps> = ({ onClose, children }) => (
  <Grid position="relative">
    <Flex
      position="absolute"
      top={15}
      left={15}
      right={15}
      zIndex={10}
      justifyContent={children ? "space-between" : "end"}
      alignItems="center"
    >
      {children}
      <UIIconButton Icon={CloseIcon} variant="secondary" onClick={onClose} />
    </Flex>
  </Grid>
);

export default Header;
