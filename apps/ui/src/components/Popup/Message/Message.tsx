import {Typography} from "$components";
import {FC, ReactNode} from "react";
import Flex from "../../Flex";

interface IProps{
    children:ReactNode
}

export const Message:FC<IProps> = ({children}) => <Flex alignItems="center" justifyContent="center" >
    <Typography fontWeight={700} size="18/18" >{children}</Typography>
</Flex>
