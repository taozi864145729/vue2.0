<template>
    <div class="container">
        <div class="card-content">
            <div class="card-offers"><span>盛夏盛惠 限时五折</span><span class="right"><span class="num"> 5 </span>折</span></div>
            <div class="offers-info">
                <div class="info-left">
                    <div class="info-time">剩余23天</div>
                    <div>已经领取15288张</div>
                </div>
                <div class="info-right">
                    <button>立即领取</button>
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
    height: 355px;
    background: #ccc;
    z-index: 1;
    position: relative;
}
.right{
    float: right;
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
