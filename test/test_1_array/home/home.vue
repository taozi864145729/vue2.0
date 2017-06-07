<template>
    <div class="container">
        <div class="tab">
            <ul>
                <li class="no_border_right" v-on:click="activeShow=0">a111</li>
                <li class="no_border_right" v-on:click="activeShow=1">b111</li>
                <li v-on:click="activeShow=2">c1111</li>
            </ul>
            <div v-if="activeShow==0">
              test2ssssssssssss
            </div>
            <div v-if="activeShow==1">
                test2111111111111
            </div>
            <div v-if="activeShow==2">
                test3........
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeShow:0
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
</style>


