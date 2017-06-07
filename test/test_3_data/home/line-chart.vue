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

            let _series2 =[];
            for(var i=0;i<this.lineContent.arrayData.length; i++) {
                let o = this.lineContent.arrayData[i];
                let _area = o.t =='area' ? {color: o.c} : undefined;
                _series2.push({
                    type: 'line',
                    smooth: false,
                    itemStyle: {
                       normal: {
                           lineStyle: {color: o.c},
                           areaStyle : _area
                       }
                    },
                    data: o.d
                })
            }

            var _series = this.lineContent.arrayData.map(o=>{
                let _area = o.t =='area' ? {color: o.c} : undefined;
                return {
                    type: 'line',
                    smooth: false,
                    itemStyle: {
                       normal: {
                           lineStyle: {color: o.c},
                           areaStyle : _area
                       }
                    },
                    data: o.d
                }
            })



            myChart.setOption({
                title: { text: this.title },
                tooltip: {},
                xAxis: {
                    data: this.lineContent.type
                },
                yAxis: {},
                series: _series
            });
        }
    }
</script>
