<template>
  <div class="collumn_report col " >
    <div v-if="selectReport.tema">
      <div class="d-flex align-items-center mt-3">
        <p class="he1 ">Разведзонд завершил сканирование планеты binyruby [0:10:0]</p>
        <p class="ml-auto">15.05.2020</p>
      </div>
      <div class="row">
        <div class="col-12 he2">Владелец: <span class="text-white b">torrhino</span></div>
      </div>
      <div class="row mt-3">
        <div class="col-7">
          <div class="heigt_box px-2 pb-1">
            <span class="he2">Ресурсы:</span>
          </div>
          <div class="row mt-1 px-1">
            <div class="col-3 ">
              <p class="m-0">Титан:</p>
              <p class="yellow_main he2">324 531</p>
            </div>
            <div class="col-3 ">
              <p class="m-0">Кремний:</p>
              <p class="yellow_main he2">445 371</p>
            </div>
            <div class="col-3 ">
              <p class="m-0">Антиматерия:</p>
              <p class="yellow_main he2">416 930</p>
            </div>
            <div class="col-3 ">
              <p class="m-0">Энергия:</p>
              <p class="yellow_main he2">221</p>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="heigt_box px-2 pb-1">
            <span class="he2">Обломки на орбите:</span>
          </div>
          <div class="row mt-1 px-1">
            <div class="col-4 ">
              <p class="m-0">Титан:</p>
              <p class="yellow_main he2">1 324 531</p>
            </div>
            <div class="col-4 ">
              <p class="m-0">Кремний:</p>
              <p class="yellow_main he2">3 151 415</p>
            </div>

          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-4 ">
          <div class="heigt_box px-2 pb-1">
            <span class="he2">Здания:</span>
          </div>
          <div class="border_box mx-1 px-1 d-flex">
            <span>Коллайдер:</span>
            <span class="ml-auto yellow_main">1</span>
          </div>
          <div class="border_box mx-1 px-1 d-flex">
            <span>Нейтринная электростанция: </span>
            <span class="ml-auto yellow_main">9</span>
          </div>
        </div>

        <div class="col-4">
          <div class="heigt_box px-2 pb-1">
            <span class="he2">Оборона:</span>
          </div>
          <div class="border_box mx-1 px-1 d-flex">
            <span>Ракетный блок:  </span>
            <span class="ml-auto yellow_main">65</span>
          </div>
        </div>

        <div class="col-4">
          <div class="heigt_box px-2 pb-1">
            <span class="he2">Корабли:</span>
          </div>
          <div class="border_box mx-1 px-1 d-flex">
            <span>Штурмовик:  </span>
            <span class="ml-auto yellow_main">44</span>
          </div>
        </div>

      </div>

      <div class="row mt-3">
        <div class="col-12">
          <div class="heigt_box px-2 pb-1">
            <span class="he2">Технологии:</span>
          </div>
        </div>
        <div class="col-4">
          <div class="border_box mx-1 px-1 d-flex">
            <span>Аннигиляционный двигатель:</span>
            <span class="ml-auto yellow_main">8</span>
          </div>
        </div>
        <div class="col-4">
          <div class="border_box mx-1 px-1 d-flex">
            <span>Планетарное сканирование:  </span>
            <span class="ml-auto yellow_main">11</span>
          </div>
        </div>
        <div class="col-4">
          <div class="border_box mx-1 px-1 d-flex">
            <span>Лептонное оружие:   </span>
            <span class="ml-auto yellow_main">31</span>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12">
          <div class="heigt_box px-2 pb-1">
            <span class="he2">Флот:</span>
          </div>
        </div>
        <div class="col-12">
          <table class="w-100">
            <thead>
              <tr>
                <td>Игрок</td>
                <td>Разведзонд: </td>
                <td>Шаттл: </td>
                <td>Транспорт: </td>
                <td>Истребитель:</td>
                <td>Истребитель:</td>
                <td>Штурмовик:</td>
                <td>Фрегат:</td>
                <td>Галактион:</td>
                <td>Разрушитель:</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alabay</td>
                <td class="yellow_main">157</td>
                <td class="yellow_main">12</td>
                <td class="yellow_main">23</td>
                <td class="yellow_main">43</td>
                <td class="yellow_main">0</td>
                <td class="yellow_main">0</td>
                <td class="yellow_main">0</td>
                <td class="yellow_main">0</td>
                <td class="yellow_main">0</td>
              </tr>
            </tbody>
          </table>
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
td{
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}
p{
  font-size:17px;
}
span{
  font-size: 17px;
}
.collumn_report{
  min-height: 100vh;
  background: rgba(71, 75, 80, 0.9);
  color: #DEDEDE;
}
.he1{
  font-size: 25px;
}
.he2{
  font-size: 20px;
}
.yellow_main{
  color: #FDFFB1;
}
.heigt_box{
  background: rgba(0, 0, 0, 0.38);
}
.border_box{
  border-bottom:  1px solid rgba(255, 255, 255, 0.18);
}
.border_bottom{
  border-bottom: 1px solid #6d6d6d;
}
</style>
