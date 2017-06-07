<template>
    <div class="container">
        <div class="store_title">{{title}}</div>
        <div class="store_content">
            <div class="content-left">
                <img src="../image/pc_login.png"/>
            </div>
            <div class="content-right">
                <div class="store-name">{{name}}</div>
                <div class="store-address">
                    <span>泉水路商圈</span>
                    <span class="right">200m</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['title','name'],
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
    height: 105px;
}
.store_title{
    height: 40px;
    line-height: 40px;
    border-bottom: solid 1px #ccc;
    padding-left: 10px;
}
.store_content{
    display: flex;
    flex-direction: row;
    padding: 10px;
}
.content-left img{
    width: 45px;
    height: 45px;
    margin-right: 15px;
}
.content-right{
    width: calc(100% - 60px);
}
.store-name{
    font-size: 1.1em;
    margin-bottom: 5px;
}
.store-address{
    color: #9D9D9D;
}
.right{
    float: right;
}
</style>
