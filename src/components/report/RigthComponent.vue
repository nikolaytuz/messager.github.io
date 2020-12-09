<template>
  <div class="collumn_report col " >
    <div v-if="selectReport.tema">
      <p class="he1 mt-3">{{selectReport.tema}}</p>


      <div class="container-fluid mt-2">
        <div class="row">
          <div class="col-4 b px-2">Атакующий</div>
          <div class="col-4 b px-2">Обороняющийся</div>
        </div>
        <div class="row">
          <div class="col-4 px-4">
            <div class="row border_bottom mt-1">
              <div class="col-6 px-0">Общие потери</div>
              <div class="col-6 text-right">0</div>
            </div>
          </div>
          <div class="col-4 px-4">
            <div class="row border_bottom mt-1">
              <div class="col-6 px-0">Общие потери</div>
              <div class="col-6 text-right">0</div>
            </div>
            <div class="row border_bottom mt-1">
              <div class="col-6 px-0">Титан</div>
              <div class="col-6 text-right">1253</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectReport: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.collumn_report{
  min-height: 100vh;
  background: #40444B;
  color: #DEDEDE;
}
.he1{
  font-size: 25px;
}
.border_bottom{
  border-bottom: 1px solid #6d6d6d;
}
</style>
