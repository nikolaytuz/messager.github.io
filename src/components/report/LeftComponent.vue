<template>
  <div class="collumn_report col px-0">
    <p class="he1 mb-0 px-3 mt-3">Отчеты</p>

    <div class="container-fluid mt-3">
      <div class="d-flex">
        <div class="mx-2"><a @click="selectT('Scan')" :class="{b:selectThema=='Scan'}" href="#">Разведка</a></div>
        <div class=" mx-2" ><a @click="selectT('Fight')" :class="{b:selectThema=='Fight'}" href="#">Боевой доклад</a></div>
      </div>
    </div>

    <table class="w-100 mt-2">
      <thead>
        <th style="width:30px;"></th>
        <th style="width:60px">Дата</th>
        <th>Отправитель</th>
        <th>Планета</th>
      </thead>
      <tbody>
          <tr v-for="(report, index) in reports" @click="selectF(index)"  :key="report.id" :class="'link '+(selectReport.planet_name==report.planet_name?'select':'')">
            <td class="text-center ">*</td>
            <td>{{new Date(report.report.real_time).toLocaleString("ru", {month: 'numeric',day: 'numeric',})}}</td>
            <td>Система</td>
            <td>{{report.planet_name}}</td>
          </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    selectF: Function,
    selectT: Function,
    reports: Array,
    selectReport: Object,
    selectThema: String,
  },
  data(){
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td{
  text-align: center;
  color: #DEDEDE;
}
th{
  text-align: center;
}
.link{
  cursor: pointer;
}
.link:hover{
  background: #00000021;
}
  .collumn_report{
    max-width: 400px;
    min-height: 100vh;
    background: rgba(47, 49, 54, 0.9);
    color: #DEDEDE;
  }
  .he1{
    font-size: 20px;
  }
  .select{
    background: rgba(0, 0, 0, 0.3);;
  }
</style>
