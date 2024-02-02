import { ChangeEvent, createContext } from "react";

interface IContext {
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const RadioGroupContext = createContext<IContext | undefined>(undefined);
