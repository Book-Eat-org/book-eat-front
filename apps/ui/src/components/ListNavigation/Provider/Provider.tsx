import { FC, ReactNode, useCallback, useRef, useState } from "react";
import { ListNavigationContext } from "../context.ts";

const Provider: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  const [observer, setObserver] = useState<IntersectionObserver>();
  const [currentId, setCurrentId] = useState<string | undefined>();
  const refs = useRef<Record<string, HTMLDivElement>>({});

  const addRef = useCallback((id: string, ref: HTMLDivElement) => {
    refs.current[id] = ref;
  }, []);

  return (
    <ListNavigationContext.Provider
      value={{
        refs: refs.current,
        addRef,
        observer,
        currentId,
        setCurrentId,
        setObserver,
      }}
    >
      {children}
    </ListNavigationContext.Provider>
  );
};

export default Provider;
