<template>
    <Header :username="$store.getters.auth.username"></Header>
    <div class="flex flex-col items-center my-10">

    <div class="container flex flex-col items-center ">

    <TitleVue>ຈັດການຂໍ້ມູນຜູ້ໃຊ້</TitleVue>
    <div class="container flex flex-row justify-between mt-10">
         <div class="flex flex-row">
            <input
            type="search"
            class="b rounded-lg"
            placeholder="ຄົ້ນຫາຜູ້ໃຊ້"
            required
           />
           <button class="ml-2 p-3 bg-blue-500 rounded-lg text-white">
            ຄົ້ນຫາ
           </button>
         </div>

       <router-link :to="{name:'register', params:{action: 'create'}}">
        <button class="flex flex-row w-fit bg-blue-500 rounded-lg  text-white text-bold p-3">
        <span class="mr-2">
            <i class="fa-solid fa-solid fa-plus"></i>
        </span>
        <h2>ເພີມຜູ້ໃຊ້</h2>
        </button>
       </router-link>
    </div>



    <div class="mt-10 container relative overflow-x-auto shadow-md sm:rounded-lg  mb-10">

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Username
                </th>
                <th scope="col" class="px-6 py-3">
                    Date of birth
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>

                <th scope="col" class="px-4 py-3">

                </th>
                <th scope="col" class="px-4 py-3">

                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="item in userData.users" :key="item.userId">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {{ item.username }}
                </th>
                <td class="px-6 py-4">
                    {{ this.moment(item.birthdate).format("L") }}
                </td>
                <td class="px-6 py-4">
                    {{item.email}}
                </td>
                <td class="px-6 py-4" :class="item.status? 'text-green-500' : 'text-red-500' ">
                    {{ item.status? "ເປິດໃຊ້ງານ" : "ປີດໃຊ້ງານ" }}
                </td>
                <td class="px-6 py-4" v-if="item.userRole.length == 0">
                    ບໍ່ມີຫນ້າວຽກ
                </td>
                <td class="px-6 py-4" v-else>
                   {{ item.userRole }} 
                </td>
                <td class="py-4">

                     <router-link :to="{name:'register', params: {action:'update', id: item.userId}}">
                        <button class="w-12 bg-blue-500 p-2" >
                        <span class="text-white">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </span>
                       </button>
                    </router-link>
     
                </td>
                <td class=" py-4">
                    <button class="w-12 bg-red-500 p-2" @click="deleteUser(item.userId)">
                        <span class="text-white">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                    </button>
                </td>
            </tr>

        </tbody>
    </table>
</div>
</div>

<vue-awesome-paginate :total-items="userData.totalItem" :items-per-page="pageSize"   :max-pages-shown="5"  v-model="currentPage" :on-click="loadUsers" />
 </div>
</template>

<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>
<script>

import { initFlowbite } from 'flowbite';
import moment from 'moment';
import Header from '../components/Header.vue';
import TitleVue from '../components/Title.vue'
import axiosClient from '../axiosClient';
import { notifierSuccess, notifierError } from '../Notify/Notifier';
export default{
     name: 'user_management',
     components:{
        TitleVue,
        Header,
     },
    data(){
        return {
            pageSize: 10,
            currentPage: 1,
            userData: {
                totalItem:0,
                 users: []
            }

        }
    },
    methods:{
        moment(...args){
           return moment(...args);
        },

        loadUsers(){
            axiosClient.get('/Authentication/GetUsers?currentPage=' + this.currentPage + "&pageSize="+ this.pageSize ).then((response)=> {
            if(response.data){
               console.log(response.data);
               this.userData.totalItem = response.data.totalItem;
               this.userData.users = response.data.listData;
            }
        });
        },
        deleteUser(id){
         axiosClient.delete("/Authentication/DeleteUser?id="+id).then((response)=>{
          if(response.data.result){
            notifierSuccess("ລຶບສຳເລັດແລ້ວ");
            this.loadUsers();
          }else{
            notifierError(response.data.errors[0])
          }
         })
    }
    ,

    }
    ,
    mounted: function(){
        initFlowbite();
        this.loadUsers();

    }
}
</script>