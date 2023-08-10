import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export function notifierError(message){
    toast.error(message, {
        autoClose: 1000,
      })
}

export function notifierSuccess(message){
  toast.success(message,{
    autoClose: 1000
  } )
}

export function notifierWarning(message){
  toast.warning(message,{
    autoClose: 1000
  } )
}