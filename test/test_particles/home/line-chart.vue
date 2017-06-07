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
        props:['title', 'lineContent', 'content', 'type'],
        data(){
            return{

            }
        },
        mounted (){
            var myChart = echarts.init(this.$el);

            console.log(this.lineContent.arrayData.map(num => [num]));

            let areaStyle = {};
            if(this.type == 'area') {
                areaStyle = {
                    color: '#6A95E1'
                }
            }
            myChart.setOption({
                title: { text: this.title },
                tooltip: {},
                xAxis: {
                    data: this.lineContent.type
                },
                yAxis: {},
                series: [
                {
                    type: 'line',
                    name:this.lineContent.name,
                    smooth:false,
                    itemStyle: {normal: {areaStyle: {color: '#6A95E1'}, lineStyle: {color: '#6A95E1'}}},

                }
                ]
            });
        }
    }
</script>
