import  { ComponentProps, forwardRef } from "react";

interface IProps extends ComponentProps<"div"> {
  colSizes?: string;
  gap?: string;
  padding?: string;
  alignItems?: string;
  justifyContent?: string;
}

const UIGrid = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const {
    children,
    colSizes,
    gap,
    padding,
    alignItems,
    justifyContent,
    ...restProps
  } = props;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: colSizes,
        gap,
        padding,
        alignItems,
        justifyContent,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
});

export default UIGrid;
