import Flex from "../Flex";
import Typography from "../Typography";
import {FC} from "react";
import {CloseIcon} from "$assets";
import {theme} from "$theme";
import Box from "../Box";

interface IProps {
    message: string;
}

export const Success:FC<IProps> = ({message}) =>     <Box
    backgroundColor={theme.colors.general50}
    borderRadius="10px"
    padding="10px"
    width="100%"
>
    <Flex  gap={2} ><CloseIcon/><Typography fontWeight={500} size="14/14">{message}</Typography></Flex>
</Box>
