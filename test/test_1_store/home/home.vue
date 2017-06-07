<template>
    <div class="container">
       <div>
           {{$store.state.count.count}}<br>
       </div>
        <div>
            <button @click="increment">increment</button>
        </div>
        <div>
           <button @click="decrement">decrement</button>
        </div>
        <div v-if="showTab">
            AAAAAAAA
        </div>
        <div v-if="!showTab">
            BBBBBBBBB
        </div>
         <div>

         </div>
        <button @click="toggleAB">toggle</button>
    </div>
</template>

<script>
    import {mapGetters,mapActions,mapState} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        methods: {
            toggleAB:function () {
                this.$store.commit('toggleTab');
            },
            increment:function () {
                this.$store.commit('increment');
            },
            decrement:function () {
                this.$store.commit('decrement');
            }
        },
        computed:{
            ...mapState({
                showTab:(state)=>{
                    return state.menu.showTab
                }
            })
        },

    }
</script>

<style lang='scss' scoped>
.container{
    width: 100%;
    height: 100%;

    button{
        width: 180px;
        height: 35px;
        border: solid 1px #ccc;
        background-color: white;
    }
}
</style>


