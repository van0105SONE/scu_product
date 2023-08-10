

<template>
   <div class="flex flex-col items-center pt-24 mb-10">
       <div class="container flex flex-col my-10">
        <div class="self-center flex flex-col   w-fit mx-4">
          <label class="texts-center text-[50px] font-bold"> ສະໝັກວຽກ </label>
          <hr class="h-2 bg-blue-600 rounded" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-auto mt-10">
         <div class="h-96 w-96 bg-gray-100 rounded-xl drop-shadow-xl" v-for="item in jobData.listJob " :key="item">
            <img :src="item.image == ''?'../assets/image/person.jpg':item.image" alt="" class="h-3/5 w-full object-cover rounded-t-xl">
            <div class="flex flex-col justify-center my-4">
            <div class="flex flex-row mx-4 my-1"><label for="" class="font-bold">ຕຳແໜງ:</label><h1 class="ml-2"> {{ item.title }}</h1></div>
            <div class="flex flex-row mx-4 my-1"><label for="" class="font-bold text-sm">ອາຍຸລະຫວ່າງ:</label><h1 class="ml-2 text-sm">{{ item.ageFrom + "  ຫາ "+ item.ageTo }}</h1></div>
            <div class="flex flex-row mx-4 my-1"><label for="" class="font-bold text-sm">ເບີໂທຕຶດຕໍ່</label><h1 class="ml-2 text-sm">{{ item.phone }}</h1></div>

            <a href="" class=" my-4"><button class="bg-blue-500 p-2 text-white rounded-lg w-full">ສະໝັກ</button></a>
            </div>
         </div>
        </div>
       </div>
       <vue-awesome-paginate :total-items="jobData.totalItem" :items-per-page="pageSize" v-model="currentPage" class="mt-10" :on-click="loadJob"/>
   </div>
</template>


<script>
import axiosClient from '../axiosClient';
  export default {
   name: 'jobadvertisement',
   data(){
      return {
         currentPage: 1,
         pageSize: 10,
         jobData:{
            totalItem: 0,
            listJob: []
         }
         
      }
   },
   methods:{
        loadJob(){
              debugger;
              axiosClient.get("job/GetJobAll?currentPage="+this.currentPage + "&pageSize="+this.pageSize, {headers: {
               "Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
"Access-Control-Allow-Headers": "Content-Type"
        }}).then((response)=>{
                 if(response.status == 200){
                  console.log(response.data);
                  this.jobData.totalItem = response.data.totalItem;
                  this.jobData.listJob = response.data.listData;
                 }
              });
        }
   },
   mounted: function(){
    this.loadJob();
   }
  }
</script>