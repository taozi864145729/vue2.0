<template>
    <div class="container">
        <div class="card-content">
            <div class="card-info">
                <div class="info-left">
                    <div><span class="tips">优惠</span><span class="title">2015盛夏盛典,重磅来袭!手快有,手慢无~</span></div>
                    <div class="offers-info">UR盛夏盛惠,重磅来袭!上千款单品,低至五折,限时抢购!</div>
                </div>
                <div class="info-right">
                    <img src="image/pc_login.png"/>
                </div>
            </div>
            <div class="card-address">
                <span>URBAN REVIVO(世茂广场店)</span>
                <span class="right">200m</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:[],
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
    height: 194px;
}
.right{
    float: right;
}
.card-content{
    border: solid 1px #ccc;
    margin: 10px;
    height: 194px;
}
.card-info{
    border-bottom: solid 1px #ccc;
    padding: 8px;
}
.tips{
    display: inline-block;
    background-color: #ED37A4;
    color: #fff;
    font-size: 0.6em;
    height: 20px;
    width: 24px;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    margin-right: 5px;
}
.title{
    font-weight: bolder;
}
.offers-info{
    color: #9D9D9D;
}
.card-info{
    display: flex;
    flex-direction: row;
}
.info-right img{
    width: 120px;
    height: 125px;
    margin-left: 10px;
}
.card-address{
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
}
</style>
