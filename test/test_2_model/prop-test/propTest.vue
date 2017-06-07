<template>
    <div>
        <prop-item :myitems="myitems" :width="mywidth" :height="myheight"></prop-item>
        <!--<button @click="clickMethod">clickMethod</button>-->
        <!--<button @click="clickComputed">clickComputed</button>-->
        <h1 v-if='ok'>Yes</h1>
        <h1 v-else>No</h1>
        <div v-if="type == 'A'">
            this A/
        </div>
        <div v-else-if="type == 'B'">
            this B/
        </div>
        <div v-show="ok">
            ok
        </div>
        <div id="for-example">
            <ul>
                <li v-for="(item ,key,index) in items">
                    {{item.msg}} - {{index}} -{{key}}
                </li>
            </ul>
        </div>
        <div v-for="n in 10">
            {{n}}
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
    import propItem from './propItem.vue'
    export default{
        components:{propItem},
        data(){
            return{
                myitems:[
                     {name:'anna'}
                ],
                type:'B',
                items:[{msg:'FOO'},{msg:'BAR'}]
            }
        },
        methods:{
            clickMethod:function(){

            }
        },
        computed:{
            clickComputed:function(){

            }
        }
    }
</script>
