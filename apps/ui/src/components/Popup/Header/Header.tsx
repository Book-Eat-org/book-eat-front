import { FC } from "react";
import { CloseIcon } from "$assets";
import { colors } from "$theme";
import { IconButton, Flex } from "$components";
import Typography from "../../Typography";

interface IProps {
    title?:string;
  onClose: () => void;
}

const Header: FC<IProps> = (props) => {
  const { title,onClose } = props;

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-end"
    >
        {title && <Typography size="18/18" fontWeight={700}>{title}</Typography>}
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
