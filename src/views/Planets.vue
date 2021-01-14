<template>
<div class="fonPlanet">
	<div class="podnav px-3">
    <a href="#" class="mr-3" title="Доклады по планете"><img src="@/assets/img/Vectors.png" alt=""></a>
    <a href="#" class="mr-3" title="Послать флот"><img src="@/assets/img/Vectors-1.png" alt=""></a>
    <a href="#" class="mr-3" title="Послать разведдроны"><img src="@/assets/img/Vector-2.png" alt=""></a>
    <a href="#" class="mr-3" title="Отменить посланный флот"><img src="@/assets/img/Vector-3.png" alt=""></a>
    <a href="#" class="mr-3" title="Послать коллекторы"><img src="@/assets/img/Vector-4.png" alt=""></a>
    <a href="#" class="mr-3" title="Послать шатлы"><img src="@/assets/img/Vector-5.png" alt=""></a>
	</div>
  <TableComponent></TableComponent>
</div>
</template>

<script type="text/javascript">
import TableComponent from '@/components/planets/TableComponent.vue'

export default {
	components: {
		TableComponent
	},

}
</script>

<style media="screen">
.fonPlanet {
  box-shadow: 0 0 85px #000;
  /* padding-top: 30px; */
  position: relative;
	background: #474B50;
	height: 100vh;
  max-height: 100vh;
  width: 100%;
  overflow: auto;
}

.podnav {
  position: sticky;
  left: 0;
  top: 0;
  width:100%;
	height: 30px;
	background: #2F3136;
}
</style>
