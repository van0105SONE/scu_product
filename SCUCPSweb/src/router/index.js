import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '../views/MainView.vue'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUs.vue';
import ContactView from '../views/ContactView.vue';
import ServiceView from '../views/ServiceView.vue';
import JobView from '../views/JobView.vue';
import NewsView from '../views/NewsView.vue';
import ReadView from '../views/ReadView.vue';
import AnouncementView from '../views/AnouncementView.vue';
import FinancialReport from '../views/FinancialReport.vue';
import CoreValue from '../views/core_value_details.vue'
import StaffView from '../views/StaffView.vue'
import LogIn from '../views/LoginView.vue'
import PostView from '../components/Post.vue'
import UserView from '../views/UserManagement.vue'
import RegisterView from '../components/RegisterView.vue'
import guest from '../middleware/guest';
import auth from '../middleware/auth';
import { middleWarePipeline } from '../middleware/middleWarePipeline';
import  NewsManagement from '../views/News_management.vue'
import AnnounceManagement from '../views/Announce_management.vue'
import UpdatePost from '../components/UpdatePost.vue'
import ReportManagement from '../views/ReportManagment.vue'
import JobManagement from '../views/JobManagement.vue'
import UploadJobAdvertise from '../components/UploadJobAdvertisement.vue'
import UpdateJobAdvertise from '../components/UpdateJobAdvertisement.vue'
import UploadReport from '../components/UploadReport.vue'
import UpdateReport from '../components/UpdateReport.vue'


import store from '../store'
const routes = [
{
    path: '/',
    component: MainPage,
    children: [
    {
    path: '/',
    name: 'home',
    component:  HomeView
},
{
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUsView
},
{
    path: '/Contact',
    name: 'contact',
    component: ContactView
},
{
    path: '/Service',
    name: 'service',
    component: ServiceView
},
{
    path: '/Job',
    name: 'job',
    component: JobView
},
{
    path:'/News',
    name:'news',
    component: NewsView
},
{
    path:'/Read/:action/:id?',
    name:'read_news',
    component: ReadView
},
{
    path: '/anouncement',
    name: 'anouncement',
    component: AnouncementView
},
{
    path: '/financialReport',
    name: 'financialReport',
    component: FinancialReport
},
{
    path: '/CoreValue',
    name: 'CoreValue',
    component: CoreValue
}
    ]
},
{
    path: '/newsmanagment',
    name: 'newsmanagement',
    component: NewsManagement
},
{
    path: '/announcemanagement',
    name: 'announcemanagement',
    component: AnnounceManagement
},
{
    path:'/Staff',
    name: 'staff',
    component: StaffView,
    meta: {
        middleware: [
            auth
        ]
    }
},
{
    path: '/updatepost/:id/:action',
    name: 'updatepost',
    component: UpdatePost
},
{
    path: '/Post/:action',
    name: 'Post',
    component: PostView,
    meta: {
        middleware: [
            auth
        ]
    }
},
{
    path: '/User',
    name:'user',
    component: UserView,
    meta: {
        middleware: [
            auth
]
    }
}
,
{
    path: '/login',
    name: 'login',
    component: LogIn,
    meta: {
        middleware: [
            guest
        ]
    }
},
{
    path: '/register/:action/:id?',
    name: 'register',
    component: RegisterView
},
{
    path: '/reportmanagement',
    name: 'reportmanagement',
    component: ReportManagement
},
{
    path: '/jobmanagement',
    name: 'jobmanagement',
    component: JobManagement
},
{
    path: '/uploadreport',
    name: 'uploadreport',
    component: UploadReport
},
{
    path: '/updatereport/:id',
    name: 'updatereport',
    component: UpdateReport
},
{
    path: '/uploadjobadvertisement',
    name: 'uploadjobadvertisement',
    component: UploadJobAdvertise
},
{
    path: '/updatejobadvertisement/:id',
    name: 'updatejobadvertisement',
    component: UpdateJobAdvertise
}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next)=>{
    if(!to.meta.middleware){
        next()
    }
    const middleware = to.meta.middleware;
     
    const context = {
        to, 
        from,
        next,
        store
    }

    return middleware[0]({
        ...context,
        next: middleWarePipeline(context, middleware, 1)
    })
})
export default router