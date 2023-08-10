import { JwtDecrypt } from "../middleware/JwtDecrypt"

export function setAuth(state, data){
    debugger;
     const jwtDecodeValue = JwtDecrypt(data)
     const newTokenData = {
        token: data,
        refreshToken: '',
        username: jwtDecodeValue.sub,
        tokenExp: jwtDecodeValue.exp,
        role: jwtDecodeValue.userRole
     }

     state.authData = newTokenData;
}

export function setLoginStatus(state, value){
    state.loginStatus = value
}