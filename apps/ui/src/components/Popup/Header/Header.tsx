import { FC } from "react";
import { CloseIcon } from "$assets";
import { colors } from "$theme";
import { IconButton, Flex } from "$components";

interface IProps {
  onClose: () => void;
}

const Header: FC<IProps> = (props) => {
  const { onClose } = props;

  return (
    <Flex 
      alignItems="center"
      justifyContent="flex-end"
    >
      <IconButton
        onClick={onClose}
        style={{
          background: `${colors.general300}`,
          borderRadius: '50%',
          padding: 9
        }}
      >
        <CloseIcon />
      </IconButton>
    </Flex>
  );
}

export default Header;
