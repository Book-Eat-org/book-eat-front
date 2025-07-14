import { FC } from "react";
import { Popup } from "@book-eat/ui";
import { Button } from "@book-eat/ui/src";

interface IProps {
  isActive: boolean;
  onClose: () => void;
}

const PopupInfo: FC<IProps> = (props) => {
  const { isActive, onClose } = props;

  return (
    <Popup isActive={isActive} onClose={onClose}>
      <Popup.Message>
        Редактировать товары с добавками можно в корзине
      </Popup.Message>
      <Popup.Footer>
        <Button variant="primary" width="100%" onClick={onClose}>
          Понятно
        </Button>
      </Popup.Footer>
    </Popup>
  );
};

export default PopupInfo;
