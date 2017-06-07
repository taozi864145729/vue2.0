<template>
    <div class="container">
sss
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
    height: 255px;
    background: #EB008B;
}
.card-content{
    background: #EB008B;
    width: 100%;
    height: 140px;
    z-index: 2;
    position: absolute;
    bottom: 0;
}
.card-offers{
    height: 70px;
    margin: 0 10px;
    color: #fff;
    line-height: 70px;
    border-bottom: solid 1px #fff;
}
.num{
    font-size: 36px;
}
.offers-info {
    display: flex;
    height: 70px;
    width: 100%;
    margin: 0 10px;
}
.info-left{
    width: 50%;
    color: #fff;
}
.info-time{
    padding: 10px 0;
}
.info-right{
    text-align: right;
    width: 45%;
    line-height: 50px;
    padding-top: 10px;
    button{
        height: 42px;
        background-color: #fff;
        color: #EB008B;
        border: none;
        width: 120px;
        border-radius: 2px;
        font-size: 18px;
    }
}
</style>
