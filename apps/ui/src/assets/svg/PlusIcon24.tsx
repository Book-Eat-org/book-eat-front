import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

const PlusIcon24: FC<IProps> = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2059 11.999C21.2059 12.4132 20.8701 12.749 20.4559 12.749H3.48535C3.07114 12.749 2.73535 12.4132 2.73535 11.999C2.73535 11.5847 3.07114 11.249 3.48535 11.249H20.4559C20.8701 11.249 21.2059 11.5847 21.2059 11.999Z"
        fill="#0F0F0F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9706 2.76367C12.3848 2.76367 12.7206 3.09946 12.7206 3.51367L12.7206 20.4842C12.7206 20.8984 12.3848 21.2342 11.9706 21.2342C11.5564 21.2342 11.2206 20.8984 11.2206 20.4842L11.2206 3.51367C11.2206 3.09946 11.5564 2.76367 11.9706 2.76367Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};

export default PlusIcon24;
