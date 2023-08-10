<template>
    <div class="flex flex-col items-center">
        <TitleVue>ຈັດການຂໍ້ມູນເອກະສານລາຍງານ</TitleVue>
        <div class="container flex flex-col items-center">

        <div class="container flex flex-row justify-between mt-10">
         <div class="flex flex-row">
            <input
            type="search"
            class="b rounded-lg"
            placeholder="ຄົ້ນຫາຜູ້ໃຊ້"
            required
           />
           <button class="ml-2 p-3 bg-blue-500 rounded-lg text-white">
            ຄົ້ນຫາເອກະສານ
           </button>
         </div>

       <router-link :to="{name:'uploadreport'}">
        <button class="flex flex-row w-fit bg-blue-500 rounded-lg  text-white text-bold p-3">
        <span class="mr-2">
            <i class="fa-solid fa-solid fa-plus"></i>
        </span>
        <h2>ອັບໂຫລດເອກະສານ</h2>
        </button>
       </router-link>
    </div>
        <ul class="container flex flex-col mt-10">
            <li v-for="item in reportData.listReport" :key="item" class="w-full h-24 flex flex-row rounded-lg shadow-lg bg-blue-400 justify-between my-2 ">
                <div class="w-2/4 h-full flex">
     
                    <img src='../assets/image/google-docs.png' class="h-24 w-24 p-2">

                 <div class="flex flex-col justify-between my-4 mx-2">
                 <h1 class="text-2xl text-bold w-96 truncate overflow-hidden ">{{ item.title }}</h1>
                 <div class="flex flex-row items-center ">
                    <h2>ລາຍລະອຽດ:</h2>
                   <h2 class="text-sm ml-2">{{ item.description }}</h2>
                  </div>
                 </div>
                </div>

                <div class="w-1/4 flex justify-end">
                    <router-link :to="{name: 'updatereport', params: {id: item.id}}">
                        <button class="w-24 h-20 bg-blue-500 p-2 m-2 rounded-lg" >
                        <span class="text-white">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </span>
                       </button>
                    </router-link>
   


                    <button class="w-24 h-20 bg-red-500 p-2 m-2 rounded-lg" @click="DeleteReport(item.id)">
                        <span class="text-white">
                            <i class="fa-solid fa-trash"></i>
                        </span>
                    </button>
                </div>
        
            </li> 
        </ul>
        <vue-awesome-paginate :total-items="reportData.totalItem" :items-per-page="pageSize" v-model="currentPage" class="mt-10" :on-click="loadNews"/>
    </div>
    </div>
</template>

<script>
import TitleVue from '../components/Title.vue'
import axiosClient from '../axiosClient'
import { notifierError, notifierSuccess } from '../Notify/Notifier'
export default{
    name: 'reportmanagement',
    components: {
        TitleVue
    },
    data(){
        return{
            pageSize: 10,
            currentPage: 1,
            reportData:{
                 totalItem: 0,
                 listReport: []
            }
        }
    },
    methods:{
        loadReport(){
            axiosClient.get("FinancialReport/GetReportAll?currentPage="+this.currentPage + "&pageSize="+ this.pageSize).then((response)=>{
                if(response.data){
                    console.log(response.data)
                    this.reportData.totalItem = response.data.totalItem;
                    this.reportData.listReport = response.data.listData;
                }
            })
        },
        DeleteReport(id){
            debugger
            axiosClient.delete("FinancialReport/DeleteReport?id="+ id).then((response)=>{
                if(response.status == 200){
                     notifierSuccess("ລຶບຂໍ້ມູນສຳເລັດແລ້ວ");
                     this.loadReport();
                }else{
                     notifierError("ບາງຢ່າງຜິດຜາດບໍ່ສາມາດລຶບຂໍ້ມູນໄດ້")
                }
            })
        }
    },
    mounted: function(){
        this.loadReport();
    }
}
</script>