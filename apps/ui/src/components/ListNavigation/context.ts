import { createContext, useContext } from "react";

export interface IListNavigationContext {
  refs: Record<string, HTMLDivElement>;
  observer?: IntersectionObserver;
  setObserver?: (observer: IntersectionObserver) => void;
  addRef: (id: string, ref: HTMLDivElement) => void;
  currentId?: string;
  setCurrentId?: (id: string) => void;
  scrollToId?: string | null;
  setScrollToId?: (id: string | null) => void;
}

export const ListNavigationContext = createContext<IListNavigationContext>({
  refs: {},
  addRef: () => undefined,
});

export const useListNavigationContext = () => useContext(ListNavigationContext);
