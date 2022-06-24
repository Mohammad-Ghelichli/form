import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const notify =(text,type)=>{
    if(type==="success"){

        toast.success(text , {
            position: "top-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }else if(type==="error"){

        toast.error(text);
    }

}