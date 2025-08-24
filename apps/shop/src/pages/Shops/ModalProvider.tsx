import { createContext, useState, FC, ReactNode, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";
import Modal from "./Modal";

interface IContextState {
  isOpen: boolean;
  openModal: (id: EntityId) => void;
  closeModal: () => void;
}

const ModalContext = createContext<IContextState>({
  isOpen: false,
  openModal: () => void true,
  closeModal: () => void false
});

export const ModalProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shopId, setShopId] = useState<EntityId>('');

  const openModal = (id?: EntityId) => {
    if (id) {
      setShopId(id);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{
      isOpen,
      openModal,
      closeModal
    }}>
      {children}
      <Modal 
        isActive={isOpen} 
        onClose={closeModal}
        shopId={shopId}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
