import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

const MinusIcon24: FC<IProps> = (props) => {
  return (
    <svg
      width="16"
      height="2"
      viewBox="0 0 16 2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.8571 1.5H1.14286C0.839753 1.5 0.549063 1.42098 0.334735 1.28033C0.120408 1.13968 0 0.948912 0 0.75C0 0.551088 0.120408 0.360322 0.334735 0.21967C0.549063 0.0790178 0.839753 0 1.14286 0H14.8571C15.1602 0 15.4509 0.0790178 15.6653 0.21967C15.8796 0.360322 16 0.551088 16 0.75C16 0.948912 15.8796 1.13968 15.6653 1.28033C15.4509 1.42098 15.1602 1.5 14.8571 1.5Z" />
    </svg>
  );
};

export default MinusIcon24;
