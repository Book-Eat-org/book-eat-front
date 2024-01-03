import  { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

export const BurgerMenuIcon: FC<IProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0H20V3.33333H0V0ZM0 8.33333H20V11.6667H0V8.33333ZM0 16.6667H20V20H0V16.6667Z"
        fill="black"
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default BurgerMenuIcon;
