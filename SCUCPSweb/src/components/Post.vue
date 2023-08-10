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
            <input id="PickImage" type="file"  accept="image/png, image/gif, image/jpeg" class="hidden" @change="UploadImage"/>
          </label>
        </div>
      <form class="p-4" @click.prevent="HandleForm">
        <div class="flex flex-col mt-10">
          <label for="article">ຫົວຂໍ້</label>
          <input class="mt-2" type="text" name="title" v-model="News.Title" required/>
        </div>
        <div class="flex flex-col mt-10">
          <label for="article">ເນື້ອຫາ</label>
          <textarea class="mt-2" name="Text1" cols="40" rows="20" v-model="News.Article" required></textarea>
        </div>
        <div class="flex items-end justify-end">
          <button class=" w-32 bg-blue-500 mt-10 p-4 text-white rounded-lg" @click="createPost">ໂພສ</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axiosClient from "../axiosClient";
import Title from "./Title.vue"
import { ref } from "vue";
import 'vue3-toastify/dist/index.css';
import Header from "./Header.vue";
import { notifierSuccess } from "../Notify/Notifier";
import router from '../router';

export default {
  name: "post",
  components: {
    Header,
    Title
  },
  data() {
    return {
      action: this.$route.params.action,
      News: ref({
        Thumnail: '/src/assets/image/thumnail.png',
        Title: "",
        Article: "",
      }),
      Announcement: {
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
    createPost: function () {
      if(this.action == 'news'){
        axiosClient.post("News/CreateNews", this.News).then((response) => {
          console.log(response)
        if(response.status == 201){
              notifierSuccess("ໂພສຂ່າວສຳເລັດແລ້ວ"),
              router.push({name:'newsmanagement' })
        }
 
      });
      }else{
        this.Announcement.Thumnail = this.News.Thumnail;
        this.Announcement.Title = this.News.Title;
        this.Announcement.Description = this.News.Article;
        axiosClient.post("Announcement/CreateAnnouncement", this.Announcement).then((response) => {
        if(response.status == 201){
           router.push({name:'announcemanagement' })
        }
      });
      }

    },
  },
  created: function(){

  },
  mounted: function(){

  },
};
</script>