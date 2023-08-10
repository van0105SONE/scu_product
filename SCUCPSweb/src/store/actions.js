import axiosClient from '../axiosClient.js';

export function LogIn({commit}){
          debugger
         var token = localStorage.getItem('token')
         commit('setAuth', token);
}