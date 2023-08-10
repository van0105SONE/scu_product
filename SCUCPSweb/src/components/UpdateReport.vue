<template>
  <Header :username="this.$store.getters.auth.username"></Header>
  <div class="flex flex-col items-center justify-center">
    <Title > {{ this.action }} </Title>
    <div class="container bg-gray-200 shadow-xl m-10 rounded-lg">
      <div class="flex flex-col items-center justify-center w-full mt-4">
          <img  class="h-96 w-96 object-cover border-2 border-gray-200 rounded-lg" :src="reportForm.Html != '' ? '/src/assets/icons/pdf.png' : '/src/assets/icons/folder.png'">
          <label
            for="PickImage"
            class="flex flex-col items-center justify-center h-12  w-fit bg-blue-500 rounded-lg  text-white px-4 mt-4"
          >
             ເລືອກເອກະສານ
            <input id="PickImage" type="file" accept="application/pdf" class="hidden" />
          </label>
        </div>
      <form class="p-4" @click.prevent="HandleForm">
        <div class="flex flex-col mt-10">
          <label for="article">ຫົວຂໍ້ເລື່ອງ</label>
          <input class="mt-2" type="text" name="title" v-model="reportForm.Title" required/>
        </div>
        <div class="flex flex-col mt-10">
        <label for="article">ລາຍລະອຽດເອກະສານ</label>
        <input class="mt-2" type="text" name="title" v-model="reportForm.Description" required/>
      </div>
        <div class="flex items-end justify-end">
          <button class=" w-32 bg-blue-500 mt-10 p-4 text-white rounded-lg" @click="updateReport">ແກ້ໄຂ</button>
        </div>
       
      </form>
    </div>
  </div>
  </template>
  
  <script>
  import Header from './Header.vue'
  import axiosClient from '../axiosClient';
  import router from '../router';
import { notifierError, notifierSuccess } from '../Notify/Notifier';
  export default{
     name:'uploadreport',
     components: {
       Header
     },
     data(){
      return{
         reportForm:{
             Id: '',
             Title: '',
             Description: '',
             Html: ''
         }
      }
     },
     methods:{
        updateReport(){
             axiosClient.put("FinancialReport/UpdateReport", this.reportForm).then((response)=>{
               if(response.status == 200){
                   router.push({name: 'reportmanagement'})
               }else{
                  notifierError("ບາງຢ່າງຜິດພາດບບໍ່ສາມາດອັບເດດຂໍ້ມູນໄດ້");
               }
             })
        }
     },
   mounted: function(){
    axiosClient.get("FinancialReport/GetReport?id="+ this.$route.params.id).then((response)=>{
      if(response.data){
          this.reportForm.Id = response.data.id;
          this.reportForm.Title = response.data.title;
          this.reportForm.Description = response.data.description;
          this.reportForm.Html = response.data.html;
      }
    })
   }
  }
  </script>