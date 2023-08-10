<script >
import axiosClient from '../axiosClient';
import moment from 'moment';
export default{
  name: 'news_all',
  data(){
    return {
      currentPage: 1,
      pageSize: 10,
      newsData:{
        totalItem: 0,
        listNews: []
      }
    }
  },
  methods: {
    moment(...args){
      return moment(...args)
    }
  }
  ,
  mounted: function(){
    debugger;
    axiosClient.get("News/GetNewsAll?currentPage="+ this.currentPage + "&pageSize="+this.pageSize).then((response)=>{
      if(response.status == 200){
        console.log(response);
         this.newsData.totalItem = response.data.titleItem;
         this.newsData.listNews = response.data.listData;
         console.log(this.newsData.listNews);
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
          ຂ່າວສານປະຈຳວັນ
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

      <div
        class="container flex flex-col lg:flex-row items-center justify-between mt-10"
      >
        <div
          class=" w-4/5 lg:w-[500px] flex flex-col rounded-xl bg-gray-100 m-4 items-center drop-shadow-xl"
          v-for="item in newsData.listNews"
          :key="item"
        >
          <img
            :src="item.thumnail"
            alt=""
            class="w-full h-40 object-cover oboject-cover rounded-t-xl trasition ease-in-out hover:scale-110 duration-300"
          />
          <h1 class="h-8 text-center text-xl font-bold mt-4 overflow-ellipsis overflow-hidden">{{ item.title }}</h1>
          <div class="flex flex-row items-center self-start px-4 mt-2">
            <span class="text-sm">
              <i class="bi bi-calendar3"></i>
            </span>
            <p class="text-sm ml-2">{{ moment(item.createAt).format('L') }}</p>
          </div>
          <p class="h-28 p-4">{{ item.article.substring(0, 80) }} ...</p>
          
          <div
            class=" flex justify-between mt-4 p-4 bg-blue-500 w-full rounded-sm  text-white"
          >
            <label for="readmore" class="">News</label>
            <a href="">
              <span class="text-xl hover:text-[30px]">
                <i class="bi bi-arrow-right"></i> </span
            ></a>
          </div>
        </div>
      </div>
    </div>
    <vue-awesome-paginate :total-items="newsData.totalItem" :items-per-page="pageSize" v-model="currentPage" class="mt-10" :on-click="loadNews"/>
  </div>
</template>