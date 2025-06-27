import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

const ArrowUpIcon24: FC<IProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.6186 5L7.2406 9.21875M12.6186 20L12.6186 5L12.6186 20ZM12.6186 5L17.5 9.21875L12.6186 5Z" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ArrowUpIcon24;
