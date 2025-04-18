import { FC } from "react";
import { CloseIcon } from "$assets";
import { colors } from "$theme";
import { IconButton } from "$components";

interface IProps {
  onClose: () => void;
}

const Header: FC<IProps> = ({ onClose }) => (
  <IconButton
    onClick={onClose}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      background: `${colors.general300}`,
      borderRadius: '50%',
      width: '30px',
      height: '30px'
    }}
  >
    <CloseIcon />
  </IconButton>
);

export default Header;
