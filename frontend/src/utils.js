import { toast } from "react-toastify";
export const notify = (messae,type)=>{
    toast[type](messae)
}