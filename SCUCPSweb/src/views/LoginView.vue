<template>
    <div class="bg-[#1E85DD] dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  ລ໋ອກອິນເຂົ້າລະບົບ
              </h1>
              <form class="space-y-4 md:space-y-6" @submit.prevent="HandleSubmit" action="login">
                  <div>
                      <label for="email"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" v-model="formLogin.Email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ທີ່ຢູ່ອີເມວ" >
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" v-model="formLogin.Password" name="password" id="password" placeholder="ປ້ອນລະຫັດຜ່ານ" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
                  <button  @click="LogIn" class="w-full bg-[#1E85DD] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
  
              </form>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import router from '../router'
import { isProxy, toRaw } from 'vue';
import axiosClient from "../axiosClient"
import  { notifierError } from '../Notify/Notifier';
import store from '../store'

export default {
  name: "login",
  data(){
    return {
        formLogin:{
        Email: '',
        Password: ''
      }
    }
  },
  methods: {
    HandleSubmit: function(e){
      e.preventDefault();
  
    },
    LogIn: function() {

        var data = this.formLogin;
    
        if(isProxy(this.formLogin)){ 
            //this If() block is not really necessary
            data = toRaw(this.formLogin)
       }
       console.log(data.Email);
      axiosClient.post(`Authentication/LogIn`, data).then((response) => {
        if (response.data) {
          console.log(response.data);
          if(response.data.result){
            localStorage.removeItem('token');
            localStorage.setItem('token', response.data.token)
             store.dispatch('LogIn');
             router.push({name: 'staff'})
          }else{
            notifierError(response.data.errors[0]);
          }
        }
      });
    },
  },
};
</script>