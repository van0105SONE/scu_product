<template>
    <Header :username="$store.getters.auth.username"></Header>
    <div class="flex flex-col items-center justify-center">
      <Title > {{ this.action }} </Title>
      <div class="container bg-gray-200 shadow-xl m-10 rounded-lg">
        <div class="flex flex-col items-center justify-center w-full">
            <img :src="News.Thumnail" class="h-96 w-96 object-cover border-2 border-gray-200 rounded-lg" alt="">
            <label
              for="PickImage"
              class="flex flex-col items-center justify-center h-12  w-fit bg-blue-500 rounded-lg  text-white px-4 mt-4"
            >
               ເລືອກຮູບໜ້າປົກ
              <input id="PickImage" type="file" class="hidden" @change="UploadImage"/>
            </label>
          </div>
        <form class="p-4" @click.prevent="HandleForm">
          <div class="flex flex-col mt-10">
            <label for="article">ຫົວຂໍ້</label>
            <input class="mt-2" type="text"  accept="image/png, image/gif, image/jpeg" name="title" v-model="News.Title" required/>
          </div>
          <div class="flex flex-col mt-10">
            <label for="article">ເນື້ອຫາ</label>
            <textarea class="mt-2" name="Text1" cols="40" rows="20" v-model="News.Article" required></textarea>
          </div>
          <div class="flex items-end justify-end">
            <button class=" w-32 bg-blue-500 mt-10 p-4 text-white rounded-lg" @click="updatePost">ແກ້ໄຂ</button>
          </div>
         
        </form>
      </div>
    </div>
  </template>
  <script>
  import axiosClient from "../axiosClient";
  import Title from "./Title.vue"
  import { useRoute } from "vue-router";
  import { ref } from "vue";
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import Header from "./Header.vue";
  import { notifierError, notifierSuccess } from "../Notify/Notifier";
  import router from '../router';
import axios from 'axios';
  
  export default {
    name: "post",
    components: {
      Header,
      Title
    },
    data() {
      return {
        id: this.$route.params.id,
        action: this.$route.params.action,
        News: ref({
          Id: '',
          Thumnail: '',
          Title: "",
          Article: "",
        }),
        Announcement: {
            Id: '',
          Thumnail: "",
          Title: "",
          Description: "",
        },
      };
    },
    props: {
         action:String
      },
    components: {
      Header
    },
    methods: {
      HandleForm(e){
        e.preventDefault();
      },
      UploadImage() {
        const fileInput = document.getElementById("PickImage").files;
        var selectedFile = fileInput[0];
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = e => {
          this.News.Thumnail = e.target.result;
          console.log(this.News.Thumnail);
        };
  
  
      },
      updatePost() {
        if(this.action == 'announcement'){
            this.Announcement.Id = this.News.Id;
            this.Announcement.Description = this.News.Article;
            this.Announcement.Thumnail = this.News.Thumnail;
            this.Announcement.Title = this.News.Title;
            if(this.News){
                axiosClient.put("/Announcement/UpdateAnnouncement", this.Announcement).then((response)=>{
                if(response.data){
                    console.log(response.data)
                    router.push({name: 'announcemanagement'});
                }else{
                    notifierError(response.data.result[0]);
                }
            });
            }else{
              notifierError("ບໍ່ພົບຂໍ້ມູນທິ່ຈະແກ້ໄຂ");
            }

        }else{
            debugger;
            console.log(this.News)
            axiosClient.put("/News/UpdateNews", this.News).then((response)=>{
                console.log(response)
                if(response.status == 200){
                    router.push({name: 'newsmanagement'});
                }else{
                    notifierError("ແກ້ໄຂຂໍ້ມູນບໍ່ສຳເລັດ");
                }
            });
        }

      },

       loadData(){
        debugger;
        console.log(this.action)
        if(this.action == 'announcement'){
            axiosClient.get("/Announcement/GetAnnouncement?id="+ this.id).then((response)=>{
            if(response.data){
                this.News.Id = response.data.id;
                 this.News.Article = response.data.description;
                 this.News.Thumnail = response.data.thumnail;
                 this.News.Title = response.data.title;
            }
          })
        }else{
            axiosClient.get("/News/GetNews?id="+ this.id).then((response)=>{
            if(response.data){
                this.News.Id = response.data.id;
                 this.News.Article = response.data.article;
                 this.News.Thumnail = response.data.thumnail;
                 this.News.Title = response.data.title;
            }
          })
        }
       }
    },
    created: function(){
      this.loadData();
    },
    mounted: function(){
  
    },
  };
  </script>