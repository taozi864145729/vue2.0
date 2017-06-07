<template>
    <div>
        <div :class="{errorClass:isActive}">nice</div>
        <div v-bind:class="[hasActive ? activeClass : '', errorClass]">what</div>
        <div v-bind:class="[{ activeClass: hasActive },errorClass]">what</div>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">style</div>
    </div>
</template>
<style scoped>
    .active{
        color:red
    }
    .error{
        color:red;
    }
    .errorClass{
        color:green;
    }
    .activeClass{
        background:red;
    }
</style>
<script>
    export default{
        data(){
            return{
                 isActive:true,
                 hasActive:false,
                 activeColor: 'red',
                 fontSize: 30

            }
        }
    }
</script>
