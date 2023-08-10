<script>
import { ref} from "vue";
import { initFlowbite } from "flowbite";
import { useI18n } from "vue-i18n";
import Tr from './i18n/translation'
import axiosClient from "./axiosClient"
import router from './router'
import MainView from "./views/MainView.vue";
import LoginView from "./views/LoginView.vue";
import StaffView from "./views/StaffView.vue";
// onMounted(() => {
//   initFlowbite();
// });


// let open = ref(true);
// function MenuOpen() {
//   open.value = !open.value;
// }



// //init i18n
// const {t, locale} = useI18n()
// const supportedLocales = Tr.supportedLocales
// const switchLanguage = async (event) =>{
//   const newLocale = event.target.value;
//   await Tr.switchLanguage(newLocale)
// }

// const listSponsrs = [
//   {
//     name: "giz",
//     url: "./assets/sponsors/giz-logo.gif",
//   },
//   {
//     name: "Laos national bank",
//     url: "./assets/sponsors/LOGO_BANK_V2.png",
//   },
//   {
//     name: "LMFA",
//     url: "./assets/sponsors/LMFA-update-logo-e1639008553398.png",
//   },
// ];

// //login
// var showLogin = true;
// var formLogin = {
//   Email: '',
//   Password: ''
// }

// function LogIn(){
//   axiosClient.post(`Authentication/LogIn`,formLogin).then((response) => {
//     if(response.data){
//          showLogin =
//         router.push({ path: '/staff', replace: true })
//     };
//   });
// }
export default{
  name: 'app',
  components:{
    MainView,
    LoginView,
    StaffView
  },
  data(){
    return{

    }
  }
}
 </script>



<template>
 <div>
  <router-view />
 </div>

</template>


