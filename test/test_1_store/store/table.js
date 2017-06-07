import Vue from 'vue';
import config from '../config/config.js'

const state = {
    num:null,
    page:null,
    row:[],
    column:[
        {id:'title',name:'Title'},
        {id:'name',name:'Name'},
        {id:'identitycardnumber',name:'Identity Card Number'},
        {id:'onboardingdate',name:'On Boarding Date'},
        {id:'department',name:'Department'},
        {id:'exitdate',name:'Exitdate'},
        {id:'photo1',name:'Photo1'},
        {id:'photo2',name:'Photo2'}
    ]
}
const mutations = {
    fetchHrPeopleWork:function(state, o) {
        state.row = o.body ? o.body.content.content: [];
        state.num = o.body.content.totalElements;
    }
}
const actions = {
    fetchHrPeopleWork({commit, state}, o) {
        Vue.http.get(`${config.API_ROOT}/customerservice/GetPeopleWorkingOnSiteData?pageno=${o.page}&pagecount=10&cmpcode=${o.code}`,).then((response) => {
            commit('fetchHrPeopleWork', response)
        }, (error)=>{
            console.log(error);
        })
    }
}
export default {
    state,
    mutations,
    actions
}
