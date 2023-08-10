<script>
import  Title from '../components/Title.vue';
import axiosClient from '../axiosClient';
export default {
    name: 'financial_report',
    components:{
        Title
    },
    data(){
        return{
            currentPage: 1,
            pageSize: 10,
            reportData:{
                totalItem: 0,
                listReport: []
            }
       
        }
    },
    methods:{
        loadReport(){
            axiosClient.get("FinancialReport/GetReportAll?currentPage="+ this.currentPage +"&pageSize=" + this.pageSize).then((reponse)=>{
                if(reponse.data){
                    console.log(reponse);
                    this.reportData.totalItem = reponse.data.totalItem;
                    this.reportData.listReport = reponse.data.listData;
                }
            })
        },
        dowloadPdf(item){
            const linkSource = `${item.html}`;
            const downloadLink = document.createElement("a");
            const fileName = `${item.title}.pdf`;
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
        }
    },
    mounted: function(){
        this.loadReport();
    }
}
</script>

<template>
    <div class="flex flex-col items-center my-10">
        <Title>
            ລາຍງານການເງິນສະຖານບັນ
        </Title>

         <div class="container flex flex-col justify-self-center mt-10">
            <div class="h-28 w-full  flex bg-gray-100 my-2 rounded-lg justify-between drop-shadow-lg" v-for="item in reportData.listReport" :key="item">
                <div class="flex flex-row">
                    <img src="../assets/image/google-docs.png" alt="" class="h-24 w-24 object-cover self-center">
               <div class="flex flex-col ml-2 my-2">
                 <h1 class="h-12 w-fit p-2 text-xl font-bold">
                  {{ item.title }}
                 </h1>
                 <p class="p-2">
                  {{ item.description }}
                 </p>
               </div>
                </div>


               <button class="w-24 bg-gray-500 rounded-lg text-white p-1 my-2 mr-2" @click="dowloadPdf(item)">
               <span class="text-5xl">
                 <i class="fa-solid fa-file-arrow-down"></i>
               </span>
               </button>
            </div>
         </div>
         <vue-awesome-paginate :total-items="reportData.totalItem" :items-per-page="pageSize" v-model="currentPage" class="mt-10" :on-click="loadReport"/>
    </div>
</template>