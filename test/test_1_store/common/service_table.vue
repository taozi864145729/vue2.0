<template>
    <div class="container">
        <table>
            <thead>
                <th><input type="checkbox"/></th>
                <th v-for="col in columns">{{col.name}}</th>
            </thead>
            <tbody>
                <tr v-for="row in rows">
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td v-for="col in columns">
                        {{row[col.id]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props:['columns','rows'],
        data(){
            return{

            }
        }


    }
</script>

<style lang='scss' scoped>
.container{
    width: 100%;
    height: 100%;
}
</style>


