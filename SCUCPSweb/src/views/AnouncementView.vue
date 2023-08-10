<script >
import axios from 'axios';
import axiosClient from '../axiosClient';

export default{
  name: 'announcement',
  data(){
    return {
      listAnnounce: []
    }
  },
  mounted:function(){
    axiosClient.get("/Announcement/GetAnnouncementAll").then((response)=>{
      if(response.data){
        this.listAnnounce = response.data;
      }
    })
  }
}
</script>

<template>
  <div class="flex flex-col items-center pt-40 mb-10">
    <div class="container flex flex-col justify-center">
      <div class="self-center flex flex-col mt-10 w-fit mx-4">
        <label class="texts-center text-[50px] font-bold">
          ແຈ້ງການ
        </label>
        <hr class="h-2 bg-blue-600 rounded" />
      </div>

      <form class="mt-10 mx-4">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ຄົ້ນຫາຂ່າວ"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div class="container grid grid-cols-1 grid-rows-4 gap-4 mt-10">
          <div
            class="flex flex-col lg:flex-row h-auto lg:h-64 w-auto bg-gray-100 mx-4 rounded-xl drop-shadow-lg"
            v-for="item in listAnnounce"
            :key="item"
          >
            <img
              :src="item.thumnail"
              alt=""
              class="h-full w-94 object-cover bg-blue-100 rounded-xl"
            />

            <div class="flex flex-col ml-4 my-2">
              <h1 class="text-lg font-bold">{{ item.title }}</h1>

              <div class="flex flex-row items-center">
                <span class="text-sm">
                  <i class="bi bi-calendar3"></i>
                </span>
                <h2 class="my-2 text-sm ml-2">12/02/2023</h2>
              </div>
              <p class="text-justify mx-2">
                {{ item.description.substring(0, 800) }} ...
              </p>
              <a
                href=""
                class="self-end justify-self-end mx-4 hover:text-[#0566DD] mt-2 font-bold"
                >
                Reade more
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>