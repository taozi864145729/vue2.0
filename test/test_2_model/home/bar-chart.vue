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
            myChart.setOption({
                title: { text: this.title },
                tooltip: {},
                xAxis: {
                    data: this.content.type
                },
                option :{
                    color: ['orange']
                },
                yAxis: {},
                series: [{
                    type: 'bar',
                    itemStyle: {normal: {color:'orange'}},
                    data: this.content.data
                },
                {
                    type: 'bar',
                    itemStyle: {normal: {color:'yellow'}},
                    data: this.content.data2
                }]
            });
        }
    }
</script>
