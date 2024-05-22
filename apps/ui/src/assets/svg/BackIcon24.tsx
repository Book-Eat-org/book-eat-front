import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

const BackIcon24: FC<IProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 11.8814L9.21875 17.2594M20 11.8814H5H20ZM5 11.8814L9.21875 7L5 11.8814Z"
        stroke="#0F0F0F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackIcon24;
