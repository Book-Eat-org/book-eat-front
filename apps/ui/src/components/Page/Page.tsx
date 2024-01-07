import { ComponentProps, FC, ReactNode } from "react";
import Header from "./Header";
import Title from "./Title";
import Box from "../Box";
import Flex from "../Flex";

interface IProps extends ComponentProps<typeof Box> {
  header: ReactNode;
  children: ReactNode;
  withoutPaddings?: boolean;
}

interface INestedComponents {
  Header: typeof Header;
  Title: typeof Title;
}

const Page: FC<IProps> & INestedComponents = (props) => {
  const { header, withoutPaddings, children, ...restProps } = props;

  return (
    <Flex
      flexDirection="column"
      height="100%"
      overflow="auto"
      backgroundColor="grayLight"
    >
      {header}
      <Box
        px={withoutPaddings ? undefined : "15px"}
        py="15px"
        height="100%"
        overflow="auto"
        {...restProps}
      >
        {children}
      </Box>
    </Flex>
  );
};

Page.Title = Title;
Page.Header = Header;

export default Page;
