import toast from "react-hot-toast";
import {Success} from "./Success.tsx";

export const notification = {
    success:(message:string) => toast.custom(<Success message={message}/>,{style:{left:15,right:15}})
}
