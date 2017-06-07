<template>
   <div>
       <div v-for="item in myitems">
           {{item.name}}
       </div>
        <h1>{{title}}</h1>
       <h1>{{width}}</h1>
       <button @click="clickMethod">clickMethod</button>
       <button @click="clickComputed">clickComputed</button>
       <div>{{firstName}}</div>
       <!--<button v-on:click="firstName">button</button>-->
       <!--<input type="text" v-model="myName"/>-->
       <!--<div v-html="aaa"></div>-->
       <!--<span>my name : {{myName}}</span>-->
       <!--<div disabled="someDynamicCondition">sososso</div>-->
       <!--<div v-if='true'>sosodddddddsso</div>-->
       <div>
           <p>观察Watchers</p>
           <p>
               ask a yes/no question：<input v-model="question"/>
           </p>
           <p>{{answer}}</p>
       </div>
   </div>
</template>
<style scped>
    .span{

    }
</style>
<script>
    export default{
        props:['myitems'],
        data(){
            return{
                someDynamicCondition:false,
                title:'1111',
                width:'1111',
                firstName:"anna",
                question:'',
                answer:'hello '
            }
        },
        methods:{
            clickMethod:function(){
                 this.title="2222";
                 this.width="2222";

            }
        },
        computed:{
            clickComputed:function(){
                this.title="1111";
                this.width="1111";

                return Date.now();
            }
        },
        watch:{
            question: function () {
                this.answer = 'waiting...'

            }
        },
        methods:{

        }

    }
</script>
