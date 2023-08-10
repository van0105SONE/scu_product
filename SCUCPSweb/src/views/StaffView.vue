
<template>
  <Header :username="$store.getters.auth.username"></Header>
  <main>
    <div class="flex flex-col items-center mt-10">
      <div class="xl:grid xl:grid-cols-3 xl:grid-rows-2 flex flex-col gap-9">
         <router-link :to="{name:'user'}" v-if="$store.getters.auth.role == 'Admin'">
            <div class="container h-96 w-96 bg-sky-600 flex flex-col items-center  rounded-lg">
               <div class="w-full bg-gray-200 rounded-t-lg shadow-lg">
                <img src="../assets/icons/team.png" class="h-32 w-32 mx-auto my-16">
               </div>
             
               <label  class="text-center text-white text-4xl mt-12">ຈັດການຜູ້ໃຊ້</label> 
             </div>
             </router-link>

    <!-- post daily news -->
           <router-link :to="{name:'newsmanagement'}">
            <div class="container h-96 w-96 bg-sky-600 flex flex-col items-center  rounded-lg">
               <div class="w-full bg-gray-200 rounded-t-lg shadow-lg">
                <img src="../assets/icons/news.png" class="h-32 w-32 mx-auto my-16">
               </div>
             
               <label  class="text-center text-white text-4xl mt-12">ໂພສຂ່າວປະຈຳວັນ</label> 
             </div>
           </router-link>

<!-- post anouncement -->
            <router-link :to="{name:'announcemanagement'}">
              <div class="container h-96 w-96 bg-sky-600 flex flex-col items-center  rounded-lg">
               <div class="w-full bg-gray-200 rounded-t-lg shadow-lg">
                <img src="../assets/icons/loudspeaker.png" class="h-32 w-32 mx-auto my-16">
               </div>
             
               <label  class="text-center text-white text-4xl mt-12">ໂພສແຈ້ງການສະຖາບັນ</label> 
             </div>
            </router-link>
           
            <!-- post financial report -->
            <router-link :to="{name:'reportmanagement'}">
              <div class="container h-96 w-96 bg-sky-600 flex flex-col items-center  rounded-lg">
               <div class="w-full bg-gray-200 rounded-t-lg shadow-lg">
                <img src="../assets/icons/tax.png" class="h-32 w-32 mx-auto my-16">
               </div>
               <label  class="text-center text-white text-4xl mt-12">ລາຍງານການເງິນ</label> 
             </div>
            </router-link>



            <!-- post job advertisement -->
            <router-link :to="{name:'jobmanagement'}">
              <div class="container h-96 w-96 bg-sky-600 flex flex-col items-center  rounded-lg">
               <div class="w-full bg-gray-200 rounded-t-lg shadow-lg">
                <img src="../assets/icons/job-offer.png" class="h-32 w-32 mx-auto my-16">
               </div>
               <label  class="text-center text-white text-4xl mt-12">ໂພສຮັບສະໝັກພະນັກງານ</label> 
             </div>
            </router-link>
        </div>
    </div>
  </main>
</template>

<script>
import Post from '../components/Post.vue';
import Header from '../components/Header.vue';
import axios from 'axios'
    export default
    {
        name:'staff',
        components:{
          Header,
          Post
        },
        data(){
          return{
            
          }
        },
        mounted:function(){
    
        }

    }
</script>