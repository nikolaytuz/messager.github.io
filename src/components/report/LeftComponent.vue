<template>
  <div class="collumn_report col">
    <p class="he1 mt-3">Отчеты</p>

    <table class="w-100">
      <thead>
        <th style="width:30px;"></th>
        <th style="width:60px">Дата</th>
        <th>Отправитель</th>
        <th>Тема</th>
      </thead>
      <tbody>

          <tr v-for="(report, index) in reports" @click="selectF(index)"  :key="report.id" :class="'link '+(selectReport.id==report.id?'select':'')">
            <td></td>
            <td>{{report.date}}</td>
            <td>{{report.ot}}</td>
            <td>{{report.tema}}</td>
          </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    selectF: Function,
    reports: Array,
    selectReport: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link{
  cursor: pointer;
}
.link:hover{
  background: #00000021;
}
  .collumn_report{
    max-width: 400px;
    min-height: 100vh;
    background: #2F3136;
    color: #DEDEDE;
  }
  .he1{
    font-size: 25px;
  }
  .select{
    background: #00000021;
  }
</style>
