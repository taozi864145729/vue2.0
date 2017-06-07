<template>
    <div class="exchange-container">
        <div class="content">
            <div class="content-left">
                <img src="../image/pc_login.png"/>
            </div>
            <div class="content-right">
                <div class="title">夏日有礼 限时五折</div>
                <div class="time">有限期:2016.06.01 - 2016.09.01</div>
            </div>
        </div>
        <div class="bottom">
            <img src="../image/Coupon_Pink_2@2x.png"/>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>
<style lang="scss" scoped>
.exchange-container{
    background: #EB008B;
    height: 80px;
    width: 100%;
    color: #fff;
    padding: 20px 0 0 10px;
    position: relative;
}
.content{
    display: flex;
}
.content-left{
    margin-right: 10px;
    img{
        width: 50px;
        height: 50px;
    }
}
.content-right{
    .title{
        font-size: 1.2em;
        padding-bottom: 8px;
        font-weight: bold;
    }
    .time{
        font-size: 0.9em;
    }
}
.bottom{
    position: absolute;
    bottom: -9px;
    left: 0;
    img{
        width: 100%;
    }
}
</style>