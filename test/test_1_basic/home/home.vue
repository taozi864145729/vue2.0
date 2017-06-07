<template>
    <div class="container">
        <div class="tab">
            <ul>
                <li class="no_border_right" v-on:click="activeShow=0">a111</li>
                <li class="no_border_right" v-on:click="activeShow=1">b111</li>
                <li v-on:click="activeShow=2">c1111</li>
            </ul>
            <div v-if="activeShow==0">
              test2
            </div>
            <div v-if="activeShow==1">
                test2
            </div>
            <div v-if="activeShow==2">
                test3
            </div>
        </div>
        <div id="animated-number-demo">
            <input v-model="animatedNumber" type="number">
            <p>{{animatedNumber}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeShow:0,
                number: 5,
                animatedNumber:5
            }
        },
        computed: {
            animatedNumber:function(){
                this.number--;
                setTimeout(function(){
                    if(this.number>0){
                        alert('ss');
                    }else{
                        alert('href');
                    }
                },5000)
            }
        }
    }
</script>

<style lang='scss' scoped>
    .tab{
        width: 100%;
    }
    .no_border_right{
        border-right: none !important;

    }
    .tab ul{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .tab ul li{
        width: 33%;
        height: 35px;
        border: solid 1px #ccc;
        line-height: 35px;
        text-align: center;
    }
    #animated-number-demo{
        border: solid 1px red;
        width: 800px;
        height: 200px;
    }
</style>


