import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './menu.js';
import count from './count.js';
import  table from './table'

export default new Vuex.Store({
   modules:{
       menu,
       count,
       table
   }
})
