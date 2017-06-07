<template>
    <div class="container">
        <div class="dress">
            <div v-for="image in images" class="dress_img">
                <img :src="image.src" v-bind:class="{ 'padding_right': lastChild }"/>
            </div>
            <div class="dress_guide">
                <div class='content__title'><span class='dress__icon'>优惠</span>H&M夏日穿衣搭配指南</div>
                <div class="content__info">编为大家带来夏日最流行的搭配,对于搭配这个题材.话说女人会搭配,魅力会翻倍,懂搭配的.....</div>
                <div class='down'>
                    <div class='down__name'>H&M</div>
                    <div class='down__icon'>200米</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:[],
        data(){
            return{
                   images:[
                     {id:1,src:'image/pc_login.png'},
                     {id:1,src:'image/pc_login.png'},
                     {id:1,src:'image/pc_login.png',lastChild:true},
                     {id:1,src:'image/pc_login.png'},
                     {id:1,src:'image/pc_login.png'},
                     {id:1,src:'image/pc_login.png'},
                     {id:1,src:'image/pc_login.png'},
                     {id:1,src:'image/pc_login.png'},
                     {id:1,src:'image/pc_login.png'}
                   ]
            }
        },
        methods:{

        }
    }
</script>
<style lang="scss" scoped>
.container{

}
.dress{
    border: solid 1px #ccc;
    margin: 10px;
}
.dress:last-child{
    padding-right: 0!important;
}
.dress_img{
    width: 30%;
    padding-right: 3px;
    float: left;
}
.padding_right{
    padding-right: 0!important;
}
.dress_guide{

}
.content__title {
    padding:0 10px;
    font-size: 0.9em;
    font-weight: bold;
}
.content__info{
    padding: 15px 10px;
    border-bottom: solid 1px #ccc;
}
.dress_img img{
    width: 100%;
}
.dress__icon {
    display: inline-block;
    color: white;
    width: 38px;
    padding: 0 5px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    background-color: #EB008B;
    border-radius: 2px;
    font-size: 0.6em;
    margin-right: 5px;
}
.down {
    height:50px;
    display:flex;
    flex-direction:row;
    padding:5px;
    align-items: center;
    .down__name {
        font-size: 0.9em;
        flex:1;
    }
    .down__icon {
        width:100px;
        color: #969696;
        font-size:0.8em;
        justify-content: flex-end;
        display: flex;
    }
}
</style>
