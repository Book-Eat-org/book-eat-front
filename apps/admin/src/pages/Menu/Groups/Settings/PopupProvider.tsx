import { createContext, useState, FC, ReactNode, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";
import PopupConfirm from "./Popup";

interface IPopupData {
  id: EntityId;
  title: string;
}

interface IContextState {
  isOpen: boolean;
  popupData: IPopupData | null;
  openPopup: (data: IPopupData) => void;
  closePopup: () => void;
}

const PopupContext = createContext<IContextState>({
  isOpen: false,
  popupData: null,
  openPopup: () => {},
  closePopup: () => {}
});

interface IProps {
  children: ReactNode;
}

export const PopupProvider: FC<IProps> = (props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState<{id: EntityId; title: string} | null>(null);

  const openPopup = (data: {id: EntityId; title: string}) => {
    setPopupData(data);
    setIsOpen(true);
  };

  return (
    <PopupContext.Provider value={{ 
        isOpen, 
        popupData,
        openPopup,
        closePopup: () => setIsOpen(false)
      }}
    >
      {children}
      <PopupConfirm 
        isActive={isOpen} 
        onClose={() => setIsOpen(false)} 
        data={popupData}
      />
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  return context;
};