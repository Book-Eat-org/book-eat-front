import { createContext, useState, FC, ReactNode, useContext } from "react";
import PopupInfo from "./PopupInfo";

interface IContextState {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const PopupContext = createContext<IContextState>({
  isOpen: false,
  openPopup: () => void false,
  closePopup: () => void false
});

export const PopupProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PopupContext.Provider value={{
      isOpen,
      openPopup: () => setIsOpen(true),
      closePopup: () => setIsOpen(false)
    }}>
      {children}
      <PopupInfo isActive={isOpen} onClose={() => setIsOpen(false)} />
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  return context;
};
