import { createContext, useContext } from "react";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { ISuggestResult } from "yandex-maps";

export interface IAddress {
  city?: string;
  floor?: string;
  apartment?: string;
  entrance?: string;
  intercom?: string;
  street?: string;
  building?: string;
  areas?: [string, string | undefined];
  location?: [number, number];
}
export interface IContextState {
  value: IAddress;
  setValue: (value: IAddress) => void;
  ymaps: YMapsApi | null;
  suggestions: ISuggestResult[];
  setSuggestions: (value: ISuggestResult[]) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  suggestionsActive: boolean;
  setSuggestionsActive: (value: boolean) => void;
}

export const AddressContext = createContext<IContextState>({
  suggestions: [],
  setSuggestions: () => undefined,
});

export const useAddressContext = () => useContext(AddressContext);
