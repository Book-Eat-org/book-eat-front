import { ComponentProps, FC, ReactNode, useEffect, useState } from "react";
import { useListNavigationContext } from "../context.ts";
import { isNil } from "ramda";
import Grid from "../../Grid";

export interface IProps extends ComponentProps<typeof Grid> {
  id: string;
  children: ReactNode;
}
const TargetItem: FC<IProps> = (props) => {
  const { id, children, ...restProps } = props;
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const { addRef, observer } = useListNavigationContext();

  useEffect(() => {
    if (isNil(element)) {
      return;
    }

    addRef(id, element);
    observer?.observe(element);

    return () => observer?.unobserve(element);
  }, [element]);

  return (
    <Grid ref={setElement} id={id} {...restProps}>
      {children}
    </Grid>
  );
};

export default TargetItem;
