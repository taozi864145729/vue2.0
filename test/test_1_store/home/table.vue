<template>
    <div class="container">
         <div>
            <service-table :colimns="my.columns" :rows="my.rows"></service-table>
         </div>
    </div>
</template>

<script>
    import serviceTable from '../common/service_table.vue'
    import {mapGetters,mapActions,mapState} from 'vuex'
    export default {
        components:{serviceTable},
        data(){
            return{

            }
        },
        computed:{
            ...mapState({
                my:(state)=>{
                    return{
                        columns:state.table.column,
                        rows:state.table.row
                    }
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


