import moment from "moment"
import { JwtDecrypt } from "./JwtDecrypt";
export default function ({next, store}){
    
    var token = localStorage.getItem('token');
    if(token){
        var jwtData = JwtDecrypt(token);
        if(moment(jwtData.exp * 1000).isAfter(moment())){
            return next()
        }
    }

    return next({name: 'login'})
}