import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

const ArrowDownIcon24: FC<IProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.3814 19L17.7594 14.7812M12.3814 4L12.3814 19L12.3814 4ZM12.3814 19L7.5 14.7812L12.3814 19Z" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ArrowDownIcon24;
