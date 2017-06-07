<template>
    <div class="page_footer">
        <button v-on:click="goHome">Confirm</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            goHome:function(){
                this.$router.push('/home');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .page_footer{
        position: fixed;
        bottom:30px;
        width: 100%;
        display: flex;
        justify-content: center;
        button{
            width: 100px;
            height: 45px;
            text-align: center;
            background-color:skyblue;
            color: #fff;
            border: none;
        }
    }
</style>
