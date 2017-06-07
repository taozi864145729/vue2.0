
import Vue from 'vue';
const state = {
    showTab:true
}

const mutations = {
    toggleTab(state){
        state.showTab = !state.showTab;
    }
}

const actions ={
        addTime:function () {
                setTimeout()
        }
}
export default {
    state,
    mutations,
    actions
}