import {FC, ReactNode} from "react";
import { CloseIcon } from "$assets";
import { colors } from "$theme";
import { IconButton, Flex } from "$components";

interface IProps {
    children?:ReactNode;
  onClose: () => void;
}

const Header: FC<IProps> = (props) => {
  const { children,onClose } = props;

  return (
    <Flex
      alignItems="center"
    >
        {children && <div>{children}</div>}
      <Flex ml="auto">
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
    </Flex>
  );
}

export default Header;
