<template>
    <div class="container">
        <div class="chart-container"><bar-chart :title="'BarCharts Demo'" :content="content"></bar-chart></div>
        <div class="chart-container"><line-chart :title="'LineCharts Demo'" :lineContent="lineContent" :type='"line"'></line-chart></div>
    </div>
</template>

<script>
 import barChart from "./bar-chart.vue";
 import lineChart from "./line-chart.vue";
 import echarts from "echarts";
 export default {
        components:{barChart,lineChart},
        data(){
            return{
                content: {
                    type: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                    data: [5, 20, 36, 10, 10, 20],
                    data2: [6, 22, 36, 12, 12, 22]
                },
                lineContent: {
                    type: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                    arrayData: [
                        [
                            {'num':11,'name':'成交1'},{'num':15,'name':'成交2'},{'num':18,'name':'成交3'},
                            {'num':12,'name':'成交4'},{'num':155,'name':'成交5'},{'num':186,'name':'成交'}
                        ],
                        [
                            {'num':7,'name':'成交1'},{'num':67,'name':'成交2'},{'num':5,'name':'成交3'},
                            {'num':8,'name':'成交4'},{'num':11,'name':'成交5'},{'num':34,'name':'成交'}
                        ]
                    ]
                }
            }
        }

    }
</script>

<style lang='scss' scoped>
    .chart-container{
        width: 400px;
        height: 400px;
    }
</style>


