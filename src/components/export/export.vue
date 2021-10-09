<template>
    <download-csv class="btn btn-primary"
    :data="data"
    :name="name">
    <i class="fas fa-file-export"></i>
        {{title ? title : 'Exports'}}
</download-csv>
</template>

<script>
import Vue from 'vue'
import JsonCSV from 'vue-json-csv'

Vue.component('downloadCsv', JsonCSV)
export default {
    props:['data', 'name', 'title']

}
</script>

<style scoped>
    .btn{
    height: 38px;
    color: #00509D!important;
    font-size: 17px;
    background: white!important;
    border: 1px solid #00509D!important;
    font: normal normal normal 19px/26px Poppins!important;
    }

</style>