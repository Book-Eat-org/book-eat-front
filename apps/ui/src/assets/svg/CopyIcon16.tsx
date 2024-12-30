import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

export const TrashIcon: FC<IProps> = (props) => {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.1 12.2C1.22 12.2 0.5 11.48 0.5 10.6V2.6C0.5 1.72 1.22 1 2.1 1H10.1C10.98 1 11.7 1.72 11.7 2.6M6.9 5.8H14.9C15.7837 5.8 16.5 6.51634 16.5 7.4V15.4C16.5 16.2837 15.7837 17 14.9 17H6.9C6.01634 17 5.3 16.2837 5.3 15.4V7.4C5.3 6.51634 6.01634 5.8 6.9 5.8Z"
        stroke="#6C6C6C"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
