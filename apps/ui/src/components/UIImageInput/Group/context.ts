import { createContext, useContext } from "react";

interface IGroupContext {
  error: string;
  setError: (value: string) => void;
}

export const GroupContext = createContext<IGroupContext | undefined>(undefined);

export const useGroupContext = () => useContext(GroupContext);
