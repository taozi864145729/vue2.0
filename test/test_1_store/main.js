
import Vue from 'vue'
import VueRouter from 'vue-router'

import app from "./app.vue"
import home from "./home/home.vue"
import table from './home/table.vue'

import store from "./store/index.js"

Vue.use(VueRouter);

var router = new VueRouter({
    routes:[
        {path:'/app',component:app},
        {path:'/home',component:home},
        {path:'/',component:home},
        {path:'/table',component:table}
    ]
})
new Vue({
    router,
    el: '#app',
    store,
    components: {app},
    template :`<app></app>`
})
