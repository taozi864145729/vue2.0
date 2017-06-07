
import Vue from 'vue';
const state = {
    count:13,

}
const mutations ={
    increment(state){
        state.count = state.count + 5;
    },
    decrement(state){
        state.count = state.count - 5;
    },

}

export default {
    state,
    mutations
}