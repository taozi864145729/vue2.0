<template>
    <div class="chart"></div>
</template>
<style scoped>
    .chart {
        width: 100%;
        height:100%;
    }
</style>
<script>
    import echarts from "echarts";
    export default{
        props:['title', 'content'],
        data(){
            return{

            }
        },
        mounted (){
            var myChart = echarts.init(this.$el);
            var _series = this.content.arrayData.map(o=> {
                return {
                    type: 'bar',
                    itemStyle: {normal: {color: o.c}},
                    data: o.d
                }
            })
            myChart.setOption({
                title: { text: this.title },
                xAxis: {
                    data: this.content.type
                },
                option :{
                    color: ['orange']
                },
                yAxis: {},
                series: _series
            });
        }
    }
</script>
