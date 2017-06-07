<template>
    <div class="container">
        <div class="tab">
            <ul>
                <li class="no_border_right" v-on:click="activeShow=0">a111</li>
                <li class="no_border_right" v-on:click="activeShow=1">b111</li>
                <li v-on:click="activeShow=2">c1111</li>

            </ul>
            <div v-if="activeShow==0">
                <transition name="test">
                    <div class="divA" v-if="chooseDiv">
                        this is 200 div.
                    </div>
                </transition>
                <button @click="chooseMethod">Animate</button>
              <!--<button @click="alertError()">change</button>-->
            </div>
            <div v-if="activeShow==1">
                {{reverseMsg}}
             </div>
            <div v-if="activeShow==2">
                {{fullname}}
            </div>
        </div>
        <button type="submit">submit</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeShow:0,
                a:5,
                msg:'name',
                chooseDiv:true
            }
        },
        methods:{
            chooseMethod:function () {
                this.chooseDiv = !this.chooseDiv
            }
        },
        created: function () {
            // `this` 指向 vm 实例
            console.log('a is: ' + this.a)
        },
        computed:{
            reverseMsg:function () {
                return this.msg.split('').reverse().join('');
            },
            fullname:{
                get:function () {
                    return this.newmsg + '+' +this.msg;
                },
                set:function (newValue) {
                    var names = newValue.split('')
                    this.newmsg = names[0]
                }
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

    .divA{
        width: 200px;
        height: 200px;
        background-color: red;
    }
    .divB{
        width: 100px;
        height: 100px;
        background-color: green;
    }

    .test-enter-active{
        transition: all 1s ease;
    }
    .test-enter{
        width: 0px;
    }
    .test-leave{
        width: 200px;
    }
    .test-leave-active{
        width: 0px;
        transition: all 1s ease;
    }
</style>


