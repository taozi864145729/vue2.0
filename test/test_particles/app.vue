<template>
    <div class="container">
        <div class="left_menu">
            <ul>
                <li v-for="item in items">
                    <router-link :to="item.href">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <div class="right_content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default{
        data:function(){
            return{
                items:[
                    {id:'1',name:'home',title:'home',href:'/home'},
                    {id:'2',name:'choose',title:'choose',href:'/choose'},
                    {id:'3',name:'table',title:'table',href:'/table'},
                    {id:'4',name:'propstest',title:'propstest',href:'/propstest'},
                    {id:'5',name:'vuestyle',title:'vuestyle',href:'/vuestyle'}
                ]
            }
        }
    }
</script>
<style lang='scss'scoped>
    .container{
        width: 100%;
        height: 100%;
        flex-direction: row;
        margin: 0;
        padding: 0;
        display: flex;
    }
    .left_menu{
        width: 350px;
        border-right: solid 1px #ccc;
        height: 100%;
        background-color: gray;
    }
    .right_content{
        flex: 1;
        width: 100%;
    }
</style>