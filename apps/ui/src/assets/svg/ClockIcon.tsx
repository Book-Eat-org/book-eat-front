import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

const ClockIcon20: FC<IProps> = (props) => {
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
        d="M8 14.4C11.52 14.4 14.4 11.52 14.4 8C14.4 4.48 11.52 1.6 8 1.6C4.48 1.6 1.6 4.48 1.6 8C1.6 11.52 4.48 14.4 8 14.4ZM8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0ZM10.64 11.36L9.6 12L7.2 7.84V4H8.4V7.52L10.64 11.36Z" 
        fill="#6C6C6C"
      />
    </svg>
  );
};

export default ClockIcon20;