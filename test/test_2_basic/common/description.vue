<template>
    <div class="container">
        <div class="title">{{title}}</div>
        <ul  style="list-style-type:square" class="content" >
            <li v-for="info of descriptionInfo">{{info.content}}<li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:['title','descriptionInfo'],
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
.container{
    width: 100%;
}
.title{
    background-color: #EFEFEF;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
}
ul{
    list-style-type: disc!important;
}
ul li{
    padding: 10px;
}
</style>
