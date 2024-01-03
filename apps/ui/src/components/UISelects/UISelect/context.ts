import { createContext, useContext } from "react";

interface IContextState {
  value: string;
  onChange: (value: string) => void;
  setOpened: (value: boolean) => void;
}

export const UISelectContext = createContext<IContextState>({
  value: "",
  onChange: () => void 0,
  setOpened: () => void 0,
});

export const useUISelectContext = () => useContext(UISelectContext);
