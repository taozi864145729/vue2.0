import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})

// export default new Vuex.Store({
//     state:{
//         data:{}
//     },
//     mutations:{
//         getData:(state , res) => state.data = res
//     },
//     actions:{
//         fetchData({commit , state}){
//             Vue.http.get('../data/data.json').then((response) => {
//                 commit('getData',response.body)
//             })
//         }
//     }
// })