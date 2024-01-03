import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<"svg"> {}

export const PencilIcon: FC<IProps> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.96979 16.0046H3.34865L11.8434 7.50983L10.4645 6.13098L1.96979 14.6257V16.0046ZM16.0538 6.08173L11.868 1.94517L13.2469 0.566315C13.6244 0.188772 14.0883 0 14.6385 0C15.1881 0 15.6516 0.188772 16.0292 0.566315L17.408 1.94517C17.7856 2.32271 17.9826 2.77839 17.999 3.31221C18.0154 3.84536 17.8348 4.30071 17.4573 4.67826L16.0538 6.08173ZM14.6257 7.53445L4.18581 17.9744H0V13.7885L10.4399 3.34865L14.6257 7.53445ZM11.1539 6.82041L10.4645 6.13098L11.8434 7.50983L11.1539 6.82041Z"
        fill="#222222"
        fillOpacity="0.8"
      />
    </svg>
  );
};

export default PencilIcon;
