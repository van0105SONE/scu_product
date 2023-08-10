<template>
  <Header :username="this.$store.getters.auth.username"></Header>
  <div class="flex flex-col items-center justify-center">
    <Title> ໂພສຮັບສະໝັກພະນັກງານ </Title>

    <div class="container bg-gray-200 shadow-xl m-10 rounded-lg">
      <div class="flex flex-col items-center justify-center w-full mt-5">
        <img
          :src="jobForm.Image == '' ? '../assets/image/professional.jpg' : jobForm.Image "
        
          class="h-96 w-96 object-cover border-2 border-gray-200 rounded-lg"

        />
        <label
          for="PickImage"
          class="flex flex-col items-center justify-center h-12 w-fit bg-blue-500 rounded-lg text-white px-4 mt-4"
        >
          ເລືອກຮູບໜ້າປົກ
          <input
            id="PickImage"
            type="file"
            class="hidden"
            accept="image/png, image/gif, image/jpeg"
            @change="ChooseImage"
          />
        </label>
      </div>
      <form class="p-4" @click.prevent="HandleForm">
        <div class="flex flex-col mt-10">
          <label for="article">ຕຳແໜ່ງ</label>
          <input
            class="mt-2"
            type="text"
            name="title"
            v-model="jobForm.Title"
            required
          />
        </div>

        <div class="grid grid-rows-1 grid-cols-2 mt-10">
          <div class="h-12 flex flex-col mr-10">
            <label for="article">ອາຍຸຕັ້ງແຕ່</label>
            <input
              class="mt-2"
              type="number"
              name="title"
              v-model="jobForm.AgeFrom"
              required
            />
          </div>

          <div class="h-12 flex flex-col ml-10">
            <label for="article">ຈົນເຖິ່ງ</label>
            <input
              class="mt-2"
              type="number"
              name="title"
              v-model="jobForm.AgeTo"
              required
            />
          </div>
        </div>

        <div class="h-12 flex flex-col mt-10">
          <label for="article">ເບິໂທຕິດຕໍ່</label>
          <input
            class="mt-2"
            type="number"
            name="title"
            v-model="jobForm.Phone"
            required
          />
        </div>

        <div class="flex flex-col mt-16">
          <label>ວັນທິປິດຮັບສະໝັກ</label>
          <VueDatePicker
            class="mt-2"
            :enable-time-picker="false"
            v-model="jobForm.Deadline"
          ></VueDatePicker>
        </div>

        <div class="flex flex-col mt-10">
          <label for="article">ລາຍລະອຽດການສະໝັກວຽກ</label>
          <textarea
            class="mt-2"
            name="Text1"
            cols="10"
            rows="10"
            v-model="jobForm.Description"
            required
          ></textarea>
        </div>
        <div class="flex items-end justify-end">
          <button
            class="w-32 bg-blue-500 mt-10 p-4 text-white rounded-lg"
            @click="UpdateJobAdvertise"
          >
            ໂພສ
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import axiosClient from '../axiosClient';
import axios from 'axios';
import { notifierError, notifierSuccess } from '../Notify/Notifier';
import router from '../router';
export default {
  name: 'updatejobadvertisement',
  components: {
    Header
  },
  data(){
    return {
      jobForm: {
        Id: '',
        Image: "",
        Title: "",
        AgeFrom: "",
        AgeTo: "",
        Phone: "",
        Description: "",
        Deadline: "",
      },
    }
  },
  methods: {
    HandleForm(e){
       e.preventDefault();
    },
    ChooseImage() {
      const fileInput = document.getElementById("PickImage").files;
      var selectedFile = fileInput[0];
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        this.jobForm.Image = e.target.result;
      };
    },
    UpdateJobAdvertise(){
      axiosClient.put("Job/UpdateJob", this.jobForm).then((response)=> {
        if(response.status == 200){
             router.push({name: 'jobmanagement'});
        }else{
             notifierError("ບາງຢ່າງຜີດຜາດບໍ່ສາມາດແກ້ໄຂຂໍ້ມູນໄດ້");
        }
      })
    }
  },
  mounted:function(){
    debugger;
      axiosClient.get("Job/GetJob?id="+ this.$route.params.id).then((response)=>{
        if(response.status == 200){
           this.jobForm.Id = response.data.id;
           this.jobForm.Image = response.data.image;
           this.jobForm.Title = response.data.title;
           this.jobForm.AgeFrom = response.data.ageFrom;
           this.jobForm.AgeTo = response.data.ageTo;
           this.jobForm.Phone = response.data.phone;
           this.jobForm.Description = response.data.description;
           this.jobForm.Deadline = response.data.deadline;
        }
      })

  }
};
</script>