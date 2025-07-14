import {Typography} from "$components";
import {FC, ReactNode} from "react";

interface IProps{
    children:ReactNode
}

export const Title:FC<IProps> = ({children}) => <Typography>{children}</Typography>
