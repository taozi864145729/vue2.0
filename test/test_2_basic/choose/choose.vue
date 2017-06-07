<template>
    <div class="container">
        <ul>
            <li v-bind:class="{active:activePay==0}" v-on:click="activePay=0">支付宝</li>
            <li v-bind:class="{active:activePay==1}" v-on:click="activePay=1">微信</li>
            <li v-bind:class="{active:activePay==2}" v-on:click="activePay=2">银联</li>
            <li v-bind:class="{active:activePay==3}" v-on:click="activePay=3">其他</li>
        </ul>
        <button v-on:click="goTable" class="btn">CONFIRM</button>
    </div>
</template>

<script>
    export default {
       data(){
            return{
                activePay : 0
            }
        },
        methods:{
            goTable:function(){
                   this.$router.push('/table');
            }
        }
    }
</script>

<style lang='scss' scoped>

    .active{
        color: red;
    }
    .btn{
        width: 240px;
        height: 40px;
    }
</style>


