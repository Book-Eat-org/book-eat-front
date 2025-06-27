import { FC } from "react";
import { Popup, Flex, Typography } from "@book-eat/ui";

interface IProps {
  isActive: boolean;
  onClose: () => void;
}

const PopupInfo: FC<IProps> = (props) => {
  const { isActive, onClose } = props;

  return (
    <Popup 
      isActive={isActive} 
      onClose={onClose}
    >
      <Flex alignItems="center" justifyContent="center">
        <Flex 
          alignItems="center"
          maxWidth="297px"
        >
          <Typography 
            textAlign="center" 
            size="18/18" 
            fontWeight={700}
          >
            Редактировать товары с добавками можно в корзине
          </Typography>
        </Flex>
      </Flex>
    </Popup>
  );
};

export default PopupInfo;
