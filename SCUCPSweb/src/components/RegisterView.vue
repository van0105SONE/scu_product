<template>
  <Header :username="$store.getters.auth.username"></Header>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center"
          >
           {{ this.action == 'update' ? 'ແກ້ໄຂບັນຊີຜູ້ໃຊ້' : 'ສ້າງບັນຊີຜູ້ໃຊ້ໃໝ່' }} 
          </h1>
          <form
            class="space-y-4 md:space-y-6"
            action="#"
            @click.prevent="HandleClick"
          >
            <div class="grid gap-6 mb-6 md:grid-cols-2 grid-rows-1">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ຊື່ແທ້</label
                >
                <input
                  type="text"
                  id="first_name"
                  v-model="UserForm.Fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ຊື່ຂອງຜູ້ໃຊ້"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ນາມສະກຸນ</label
                >
                <input
                  type="text"
                  id="last_name"
                  v-model="UserForm.Lname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ນາມສະກຸນຂອງຜູ້ໃຊ້"
                  required
                />
              </div>
            </div>

            <div>
              <!-- =================== -->
              <label
                for="Username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ຊື່ຜູ້ໃຊ້</label
              >
              <input
                type="Username"
                name="email"
                v-model="UserForm.UserName"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ປ້ອນຊື່ຜູ້ໃຊ້"
                required
              />
            </div>
            <div>
              <label
                for="Username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ວັນເດືອນປີເກີດ</label>
                <VueDatePicker v-model="UserForm.Birthdate" :enable-time-picker="false" ></VueDatePicker>
            </div>

            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ທີ່ຢູ່ອີ່ເມວ</label
              >
              <input
                type="text"
                name="email"
                v-model="UserForm.Email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ລະຫັດຜ່ານ</label
              >
              <div class="flex flex-row">
                <input
                :type="showPassword? 'text' :'password'"
                name="password"
                id="password"
                v-model="UserForm.Password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <div class="h-12 w-12 bg-gray-200 rounded-lg mx-2 text-center p-3" @click="toggleShow">
                   <span v-if="!showPassword">
                    <i  class="fa-solid fa-eye-slash"></i>
                   </span>
                   <span v-else>
                    <i class="fa-solid fa-eye"></i>
                   </span>
              </div>
              </div>

            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ຍືນຍັນລະຫັດຜ່ານ</label
              >
              <div class="flex flex-row">
                <input
                :type="showPassword? 'text' :'password'"
                name="confirm-password"
                placeholder="••••••••"
                id="confirm-password"
                v-model="vfPassword"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
               />
               <div class="h-12 w-12 bg-gray-200 rounded-lg mx-2 text-center p-3" @click="toggleShow">
                   <span v-if="!showPassword">
                    <i  class="fa-solid fa-eye-slash"></i>
                   </span>
                   <span v-else>
                    <i class="fa-solid fa-eye"></i>
                   </span>
              </div>
              </div>

              <p
                class="mt-2 text-sm text-red-600 dark:text-red-500"
                v-if="passVerify"
              >
                <span class="font-medium">ລະຫັດຜ່ານບໍ່ຕົງກັນ!</span> ກາລຸນາປ້ອນໃໝ່.
              </p>
            </div>

            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >ເລືອກໜ້າທີ່</label
              >
              <select
                id="countries"
                v-model="UserForm.UserRole"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>ເລືອກ</option>
                <option v-for="item in roles" :key="item" :value="item.name">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </form>

          <div class="mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ສະຖານະໃຊ້ງານ</label>
                <div class="flex items-center">
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    v-model="UserForm.IsActive"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="checked-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >ເປິດໃຊ້ງານ</label
                  >
                </div>
              </div>

              <button
              type="submit"
              @click="Register"
              class="w-full bg-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              ບັນທຶກ
            </button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axiosClient from "../axiosClient";
import Title from "./Title.vue";
import Header from "./Header.vue";
import moment from "moment";
import { notifierError, notifierSuccess } from "../Notify/Notifier";
import router from '../router';

export default {
  name: "register",
  components: {
    Header,
    Title

  },
  data() {
    return {
      action: this.$route.params.action,
      roles: [],
      vfPassword: "",
      passVerify: false,
      showPassword: false,
      UserForm: {
        Id: "",
        Fname: "",
        Lname: "",
        UserName: "",
        Birthdate: "",
        Email: "",
        Password: "",
        UserRole: "",
        IsActive: false
      },
    };
  },
  methods: {
    HandleClick(e) {
      e.preventDefault();
    },
    Register() {
      console.log(this.UserForm);
      if (this.UserForm) {
        console.log(this.UserForm.UserRole);
        if (this.UserForm.Password == this.vfPassword) {
          this.passVerify = false;
          if(this.action != 'update'){
            axiosClient
            .post("/Authentication/Register", this.UserForm)
            .then((response) => {
              if (response.data.result) {
                notifierSuccess("ສ້າງຜູ້ໃຊ້ສຳເລັດແລ້ວ");
                router.push({name: 'user'})
              }else{
                notifierError(response.data.errors[0])
              }
            });
          }else{
            axiosClient.post("/Authentication/UpdateUser", this.UserForm).then((response)=>{
               if(response.data.result){
                 notifierSuccess("ແກ້ໄຂຂໍ້ມູນສຳເລັດແລ້ວ");
                 router.push({name:'user'})
               }else{
                  notifierError(response.data.errors[0])
               }
            })
          }
        } else {
          this.passVerify = true;
        }
      }
    },

    toggleShow(){
      this.showPassword = !this.showPassword;
      console.log(this.showPassword)
    }
  },
  created: function () {
    if (this.action == "update") {
      axiosClient
        .get("/Authentication/GetUser?id=" + this.$route.params.id)
        .then((response) => {
          if (response.data) {
            this.UserForm.Id = response.data.userId;
            this.UserForm.Fname = response.data.fname;
            this.UserForm.Lname = response.data.lname;
            this.UserForm.UserName = response.data.username;
            this.UserForm.Email = response.data.email;
            this.UserForm.Password = response.data.password;
            this.vfPassword = response.data.password;
            this.UserForm.Birthdate = response.data.birthdate;
            this.UserForm.UserRole = response.data.userRole;
            this.UserForm.IsActive = response.data.status;
          }
        });
    }
  },
  mounted: function () {
    axiosClient.get("/Authentication/GetUserRole").then((response) => {
      if (response.data) {
        this.roles = response.data.list;
      }
    });
  },
};
</script>