<template>
<Header :username="this.$store.getters.auth.username"></Header>
<div class="flex flex-col items-center justify-center">
  <Title > {{ this.action }} </Title>
  <div class="container bg-gray-200 shadow-xl m-10 rounded-lg">
    <div class="flex flex-col items-center justify-center w-full mt-4">
        <img  class="h-96 w-96 object-cover border-2 border-gray-200 rounded-lg" :src="reportForm.Html != '' ? '/src/assets/icons/pdf.png' : '/src/assets/icons/folder.png'"  >
        <h1>{{ fileName }}</h1>
        <label
          for="PickPdf"
          class="flex flex-col items-center justify-center h-12  w-fit bg-blue-500 rounded-lg  text-white px-4 mt-4"
        >
           ເລືອກເອກະສານ
          <input id="PickPdf" type="file" accept="application/pdf" class="hidden" @change="chooseImage" />
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
        <button class=" w-32 bg-blue-500 mt-10 p-4 text-white rounded-lg" @click="uploadPdf">ໂພສ</button>
      </div>
     
    </form>
  </div>
</div>
</template>

<script>
import Header from './Header.vue'
import axiosClient from '../axiosClient'
import { notifierError, notifierSuccess } from '../Notify/Notifier'
import router from '../router'
export default{
   name:'uploadreport',
   components: {
     Header
   },
   data(){
    return {
        fileName: '',
        reportForm:{
            Title: "",
            Description: "",
            Html: ""
        }
    }
   },
   methods: {
    HandleForm(e){
      e.preventDefault();
    },
    uploadPdf(){

       if(this.reportForm){
        axiosClient.post("FinancialReport/UploadReport", this.reportForm).then((response)=>{
            console.log(response)
            if(response.status == 200){
              router.push({name: 'reportmanagement'})
            }
        })
       }else{
        notifierError("ກາລຸນາປ້ອນຂໍ້ມູນ")
       }


    },
    chooseImage(){
      const fileInput = document.getElementById("PickPdf").files;
      var selectedFile = fileInput[0];
      this.fileName =  selectedFile.name;
      console.log(this.fileName);
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = e => {
        this.reportForm.Html = e.target.result;
 
        console.log(this.reportForm.Html);
      };
    }
   }
}
</script>