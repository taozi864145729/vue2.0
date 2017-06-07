<template>
    <div class="container">
        <div> about </div>
       <ul>
           <li v-for="item in items">{{item.name}}</li>
       </ul>
    </div>
</template>
<style>

</style>
<script>
    import {mapState} from 'vuex';
    export default{
        data(){
            return{

            }
        },
        computed:{
           count(){
                return.store.state.count;
           }
        }
    }
</script>
