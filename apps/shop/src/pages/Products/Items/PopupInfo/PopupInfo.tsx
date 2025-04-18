import { FC } from "react";
import { Popup, Typography } from "@book-eat/ui";

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
      <Typography 
        textAlign="center" 
        size="18/18" 
        fontWeight={700}
      >
        Редактировать товары с добавками можно в корзине
      </Typography>
    </Popup>
  );
};

export default PopupInfo;
