
import Vue from 'vue'
import VueRouter from 'vue-router'

import app from "./app.vue"
import home from "./home/home.vue"
import table from "./table/table.vue"



Vue.use(VueRouter)

var router = new VueRouter({
    routes:[
        {path:'/app',component:app},
        {path:'/home',component:home},
        {path:'/table',component:table},
        {path:'/',component:home}
    ]
})
new Vue({
    router,
    el: '#app',
    components: {app},
    template :`<app></app>`
})
