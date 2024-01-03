import { createContext, useContext } from "react";
import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";

export interface IAddress {
  city?: string;
  floor?: string;
  apartment?: string;
  entrance?: string;
  intercom?: string;
  street?: string;
  building?: string;
  location?: [number, number];
}
export interface IContextState {
  value: IAddress;
  setValue: (value: IAddress) => void;
  ymaps: YMapsApi | null;
}

export const AddressContext = createContext<IContextState>({});

export const useAddressContext = () => useContext(AddressContext);
