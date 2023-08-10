<script>
import axiosClient from '../axiosClient';
import axios from 'axios';
export default {
  name:"Read",
  data(){
    return{
      action: this.$route.params.action,
       readData: '',
       list: []
    }
  },
  mounted: function(){

    if(this.$route.params.action == 'news' ){
      axiosClient.get('/News/GetNews?id='+ this.$route.params.id).then((response)=>{
      if(response.data){
       this.readData = response.data;
       console.log(this.readData);
      }
    });
    axiosClient.get("/News/GetTopFourt").then((response)=>{
      if(response.data){
       this.list = response.data;
      }
    });
    }else{
      axiosClient.get('/Announcement/GetAnnouncement?id='+ this.$route.params.id).then((response)=>{
      if(response.data){
       this.readData = response.data;
       console.log(this.readData);
      }
    });
    axiosClient.get("/Announcement/GetTopFourt").then((response)=>{
      if(response.data){
       this.list = response.data;
      }
    });
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center pt-40">
    <div class="container flex flex-col">
      <label for="title" class="text-2xl mt-5">ຫົວຂໍ້: {{ readData.title }}</label>
      <div class="flex flex-row items-center self-start mt-2">
        <span class="text-sm">
          <i class="bi bi-calendar3"></i>
        </span>
        <h2 class="text-sm ml-2">{{ readData.createAt }}</h2>
      </div>
      <img
        :src="readData.thumnail"
        alt=""
        class="w-full h-[500px] object-cover border-4 mt-5"
      />
      <hr class="my-2" />
      <p class="mt-5 mb-12 text-lg text-justify indent-8 tracking-tight">
        {{  action == 'news'? readData.article : readData.description }}
      </p>

      <hr class="my-5" />

      <label for="relate" class="text-2xl font-bold">ຂ່າວສານທີ່ກຽວຄອ້ງ</label>

      <div class="flex flex-row">
        <div
          class="h-fit w-[300px] lg:w-[400px] flex flex-col rounded-xl bg-gray-100 m-4 items-center drop-shadow-xl"
          v-for="item in this.list"
          :key="item"
        >
          <img
            :src="item.thumnail"
            alt=""
            class="h-64 w-full object-cover rounded-t-xl  duration-300"
          />
          <h1 class="h-24 text-center text-xl font-bold mt-4">{{ item.title }}</h1>
          <div class="flex flex-row items-center self-start px-4 mt-2">
            <span class="text-sm">
              <i class="bi bi-calendar3"></i>
            </span>
            <h2 class="text-sm ml-2">12/02/2023</h2>
          </div>
          <div
            class="flex justify-between mt-4 p-4 bg-blue-500 w-full rounded-sm items-end justify-self-end text-white"
          >
            <label for="readmore" class="">News</label>
            <a >
              <span class="text-xl hover:text-[30px]">
                <i class="bi bi-arrow-right"></i> </span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>