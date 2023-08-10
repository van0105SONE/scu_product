<template>
    <HeaderVue :username="this.$store.getters.auth.username"></HeaderVue>
    <div class="flex flex-col  items-center my-10">
        <TitleVue>ຈັດການຂໍ້ມູນແຈ້ງການ</TitleVue>
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

       <router-link :to="{name:'Post', params:{action: 'announcement'}}">
        <button class="flex flex-row w-fit bg-blue-500 rounded-lg  text-white text-bold p-3">
        <span class="mr-2">
            <i class="fa-solid fa-solid fa-plus"></i>
        </span>
        <h2>ໂພສແຈ້ງການໃໝ່</h2>
        </button>
       </router-link>
    </div>
        <ul class="container flex flex-col mt-10">
            <li v-for="item in newsData.listNews" :key="item" class="w-full h-24 flex flex-row rounded-lg shadow-lg bg-blue-400 justify-between my-2 ">
                <div class="w-2/4 h-full flex">
                    <div class="h-18 w-36 rounded-lg bg-white mx-2 my-2">
                    <img :src='item.thumnail' class="h-full w-full object-cover">
                </div>
                 <div class="flex flex-col justify-between my-4 mx-2">
                 <h1 class="text-2xl text-bold w-96 truncate overflow-hidden ">{{ item.title}}</h1>
                 <div class="flex flex-row items-center ">
                    <span class="text-sm">
                      <i class="bi bi-calendar3"></i>
                    </span>
                   <h2 class="text-sm ml-2">{{ this.moment(item.createAt).format("L") }}</h2>
                  </div>
                 </div>
                </div>

                <div class="w-1/4 flex justify-end">
                    <router-link :to="{name: 'updatepost', params:{id: item.id, action:'announcement'}}">
                        <button class="w-24 h-20 bg-blue-500 p-2 m-2 rounded-lg" >
                        <span class="text-white">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </span>
                       </button>
                    </router-link>
   


                    <button class="w-24 h-20 bg-red-500 p-2 m-2 rounded-lg" @click="DeleteAnnounce(item.id)">
                        <span class="text-white">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                    </button>
                </div>
        
            </li> 
        </ul>

        <vue-awesome-paginate :total-items="newsData.totalItem" :items-per-page="pageSize" v-model="currentPage" class="mt-10" :on-click="loadNews"/>
    </div>
</template>

<script>
import moment from "moment"
import TitleVue from "../components/Title.vue"
import HeaderVue from '../components/Header.vue'
import axiosClient from '../axiosClient'
import { notifierSuccess } from '../Notify/Notifier'

export default{
    name: 'announcement_management',
    components: {
        TitleVue,
        HeaderVue
    },
    data(){
        return {
          currentPage: 1,
          pageSize: 10,
          newsData: {
            totalItem: 0,
            listNews: []
          }
        }
    },
    methods:{
         moment(...args){
               return moment(...args)
         },
         loadNews(){
            axiosClient.get("/Announcement/GetAnnouncementAll?currentPage="+this.currentPage + "&pageSize="+this.pageSize).then((response)=>{
                if(response.data){
                   this.newsData.totalItem = response.data.totalItem;
                   this.newsData.listNews = response.data.listData;
                   console.log(this.newsData.listNews)
                }
            })
         },
         DeleteAnnounce(id){
            debugger;
            axiosClient.delete("/Announcement/DeleteAnnounce?id="+id).then((response)=>{
              if(response.status == 200){
                   notifierSuccess("ລຶບຂໍ້ມູນສຳເລັດແລ້ວ")
                   this.loadNews();
              }
            })
        }
    },
    created: function(){
        this.loadNews();
    }
}
</script>