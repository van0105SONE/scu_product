


<template>
  <div id="homePage" class="flex flex-col items-center">
    <div id="default-carousel" class="relative w-full border-y-8 border-indigo-600 " data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden md:h-[500px]">
        <!-- Item 1 -->

        <div
          class="hidden duration-700 ease-in-out bg-building bg-no-repeat bg-cover justify-center"
          data-carousel-item
        >
          <div class="container h-full flex justify-center">
            <div class="flex flex-row mt-12 text-center"></div>
          </div>
        </div>
        <!-- Item 2 -->

        <div
          class="hidden duration-700 ease-in-out bg-credit bg-no-repeat bg-cover"
          data-carousel-item
        >
          <div class="container items-center"></div>
        </div>
        <!-- Item 3 -->
        <div
          class="hidden duration-700 ease-in-out bg-about bg-no-repeat bg-cover"
          data-carousel-item
        >
          <div class="container items-center"></div>
        </div>
        <!-- Item 4 -->
        <div
          class="hidden duration-700 ease-in-out bg-about bg-no-repeat bg-cover"
          data-carousel-item
        >
          <div class="container items-center"></div>
        </div>
        <!-- Item 5 -->
        <div
          class="hidden duration-700 ease-in-out bg-about bg-no-repeat bg-cover"
          data-carousel-item
        >
          <div class="container items-center"></div>
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
    <!-- courasel component -->

    <!--anouncement component -->
    <div class="flex flex-col">
      <div class="flex flex-col mt-10 justify-start w-fit mx-4">
        <label class="texts-center text-[50px] font-bold">
          {{ $t("bodyHome.title1") }}
        </label>
        <hr class="h-2 bg-blue-600 rounded" />
      </div>
      <div class="container grid grid-cols-1 grid-rows-4 gap-4 mt-10">
        <div
          class="flex flex-col md:flex-row h-auto lg:h-fit w-auto bg-gray-100 mx-4 rounded-xl drop-shadow-lg"
          v-for="item in listAnnounce"
          :key="item"
        >
          <img
            :src="item.thumnail"
            class="h-full w-auto lg:w-1/4 object-cover p-2 bg-gray-100 rounded-xl"
          />

          <div class="flex flex-col ml-4 mt-4 mb-2">
            <h1 class="font-bold">{{item.title}}</h1>
            <div class="flex flex-row items-center">
              <span class="text-sm">
                <i class="bi bi-calendar3"></i>
              </span>
              <h2 class="my-2 text-sm ml-2">
                {{ moment(item.createAt).format("L") }}
              </h2>
            </div>
            
            <div class="h-32 max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <p class="indent-3 text-ellipsis overflow-hidden">
                {{ item.description.replace(/^\s+|\s+$/gm,'').substring(0, 500) }} ...
              </p>
            </div>

            <router-link
              href=""
              class="self-start justify-self-end  hover:text-[#0566DD] mt-2 font-bold"
              :to="{
                name: 'read_news',
                params: { action: 'announcement', id: item.id },
              }"
            >
            <div class="bg-blue-500 text-white p-2 rounded-lg">
              Read more
            </div>
            </router-link>
          </div>
        </div>
      </div>
      <router-link
        :to="{ name: 'anouncement' }"
        class="self-end text-2xl font-bold mt-5 mx-4"
      >
        <div class="flex flex-row">
          <label for="" class="drop-shadow-lg text-[#0566DD] hover:underline"
            >See all</label
          >
        </div>
      </router-link>
    </div>
    <!--anouncement component -->

    <div class="w-full flex justify-center bg-gray-100 my-4">
      <div class="container flex flex-col">
        <div class="flex flex-col mt-10 justify-start w-fit mx-4">
          <label class="texts-center text-[50px] font-bold">
            {{ $t("bodyHome.title2") }}
          </label>
          <hr class="h-2 bg-blue-600 rounded" />
        </div>
        <div
          class="container flex flex-col lg:flex-row items-center justify-between mt-10"
        >
          <div
            class="w-auto lg:w-[400px] flex flex-col rounded-xl bg-gray-100 m-4 items-center drop-shadow-xl"
            v-for="item in listNews"
            :key="item"
          >
            <img
              :src="item.thumnail"
              class="w-full h-60 oboject-cover rounded-t-xl trasition ease-in-out hover:scale-110 duration-300"
            />
            <div class="h-16">
              <h1 class="text-center  font-bold mt-4">{{ item.title }}</h1>
            </div>
       
            <div class="flex flex-row items-center self-start px-4 mt-2">
              <span class="text-sm">
                <i class="bi bi-calendar3"></i>
              </span>
              <h2 class="text-sm ml-2">
                {{ moment(item.createAt).format("L") }}
              </h2>
            </div>
            <div class="h-32">
              <p class="p-4 mx-2">{{ item.article.substring(0, 150) }} ...</p>
            </div>
          
            <div
              class="flex justify-between mt-4 p-4 bg-blue-500 w-full rounded-sm items-end justify-self-end text-white"
            >
              <label for="readmore" class="">News</label>
              <router-link
                :to="{
                  name: 'read_news',
                  params: { action: 'news', id: item.id },
                }"
              >
                <span class="text-xl hover:text-[30px]">
                  <i class="bi bi-arrow-right"></i> </span
              ></router-link>
            </div>
          </div>
        </div>
        <router-link
          :to="{ name: 'news' }"
          class="self-end text-2xl font-bold mt-5 mx-4 my-4"
        >
          <div class="flex flex-row">
            <label for="" class="drop-shadow-lg text-[#0566DD] hover:underline"
              >See all</label
            >
          </div>
        </router-link>
      </div>
    </div>

    <!-- service component  -->
    <div class="h-fit w-full flex justify-center my-12">
      <div class="container flex flex-col items-center">
        <div class="flex flex-col w-fit">
          <h3 class="flex items-center text-[50px] font-bold">
            {{ $t("bodyHome.core_value.title") }}
          </h3>
          <div class="h-2 bg-blue-600"></div>
        </div>

        <p class="text-xl lg:text-2xl my-4">
          {{ $t("bodyHome.core_value.subtitle") }}
        </p>

        <div class="container flex flex-col md:flex-row justify-between mt-20">
          <div
            class="w-full flex flex-col items-center mx-2 my-4 shadow-lg rounded-lg bg-gray-200 p-4"
          >
            <div class="h-52 w-52 bg-blue-500 p-8 rounded-full shadow-xl">
              <img src="../assets/LOGO/engineer.png" alt="" class="" />
            </div>
            <h3 class="text-[30px] font-bold flex justify-center mt-10">
              {{ $t("bodyHome.core_value.content_list[0].title") }}
            </h3>
            <p class="text-lg text-justify mt-4">
              {{ $t("bodyHome.core_value.content_list[0].meaning") }}
            </p>
          </div>

          <div
            class="h-auto w-full flex flex-col items-center mx-2 my-4 shadow-lg rounded-lg bg-gray-200 p-4"
          >
            <div class="h-52 w-52 bg-blue-500 p-8 rounded-full shadow-xl">
              <img src="../assets/LOGO/balance-scale.png" alt="" class="" />
            </div>
            <div>
              <h3 class="text-[30px] font-bold flex mt-10">
                {{ $t("bodyHome.core_value.content_list[1].title") }}
              </h3>
            </div>
            <div>
              <p class="text-lg text-justify mt-4">
                {{ $t("bodyHome.core_value.content_list[1].meaning") }}
              </p>
            </div>
          </div>
          <div
            class="w-full flex flex-col items-center mx-2 my-4 shadow-lg rounded-lg bg-gray-200 p-4"
          >
            <div class="h-52 w-52 bg-blue-500 p-8 rounded-full shadow-xl">
              <img src="../assets/LOGO/responsibility.png" alt="" class="" />
            </div>
            <h3 class="text-[30px] font-bold flex justify-center mt-10">
              {{ $t("bodyHome.core_value.content_list[2].title") }}
            </h3>
            <p class="text-lg text-justify mt-4">
              {{ $t("bodyHome.core_value.content_list[2].meaning") }}
            </p>
          </div>
          <div
            class="w-full flex flex-col items-center mx-2 my-4 shadow-lg rounded-lg bg-gray-200 p-4"
          >
            <div class="h-52 w-52 bg-blue-500 p-8 rounded-full shadow-xl">
              <img src="../assets/LOGO/customercetric.png" alt="" class="" />
            </div>
            <h3 class="text-[30px] font-bold flex text-justify mt-10">
              {{ $t("bodyHome.core_value.content_list[3].title") }}
            </h3>
            <p class="text-lg text-justify px-4 mt-4">
              {{ $t("bodyHome.core_value.content_list[3].meaning") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- service component -->
  </div>
</template>

<script >
import { initFlowbite } from "flowbite";
import axiosClient from "../axiosClient";
import { ref } from "vue";
import axios from "axios";
import moment from "moment";

export default {
  name: "home",
  data() {
    return {
      listNews: ref({}),
      listAnnounce: ref({}),
    };
  },
  methods: {
    moment(...args) {
      return moment(...args);
    },
  },
  mounted: function () {
    initFlowbite();
    var endPoint = [`News/GetTopFourt`, "Announcement/GetTopFourt"];
    var configs = {
      'headers':{
      "Access-Control-Allow-Origin": "*"
    }
    }
    axios.all(endPoint.map((endpoint) => axiosClient.get(endpoint, configs))).then(
      axios.spread((list1, list2) => {
        this.listNews = list1.data;
        this.listAnnounce = list2.data;
        console.log(this.listAnnounce);
        console.log(this.listNews);
      })
    );
  },
};
</script>