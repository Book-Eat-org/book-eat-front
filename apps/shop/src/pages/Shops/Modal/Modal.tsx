import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/cart";
import { Popup, Button } from "@book-eat/ui";
import { EntityId } from "@reduxjs/toolkit";
import { PageURLS, navigateToPage } from "$constants";

interface IProps {
  shopId: EntityId;
  isActive: boolean;
  onClose: () => void;
}

const Modal: FC<IProps> = (props) => {
  const { isActive, shopId, onClose } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    const url = navigateToPage(PageURLS.PRODUCTS, {
      id: shopId,
    });
    navigate(url);
    dispatch(clearCart());
    onClose();
  }

  return (
    <Popup
      mode="modal"
      isActive={isActive} 
      onClose={onClose}
    >
      <Popup.Message fontSize="14/14" fontWeight={400}>
        При переходе в другой ресторан ваша корзина будет очищена.
      </Popup.Message>
      <Popup.Footer>
        <Button variant="primary" width="100%" onClick={handleClick}>
          Понятно
        </Button>
      </Popup.Footer>
    </Popup>
  );
};

export default Modal;
