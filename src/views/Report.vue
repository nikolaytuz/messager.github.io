<template>
  <div class="container-fluid">
    <div class="row">
      <LeftComponent :selectF="selectF" :selectThema="selectThema" :selectT="selectT" :selectReport="selectReport" :reports="reports" />
      <RigthComponentScan v-if="selectThema == 'Scan'" :selectReport="selectReport" :key="selectReport.planet_name" />
      <RigthComponentFight v-if="selectThema == 'Fight'" :selectReport="selectReport" :key="selectReport.planet_name" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftComponent from '@/components/report/LeftComponent.vue'
import RigthComponentScan from '@/components/report/RigthComponentScan.vue'
import RigthComponentFight from '@/components/report/RigthComponentFight.vue'

import response from '@/components/report/compon/Response.json'

export default {
  name: 'Home',
  components: {
    LeftComponent,
    RigthComponentScan,
    RigthComponentFight
  },
  mounted(){
    console.log(response);
    this.reports = response
    this.selectReport = this.reports[0]
  },
  methods:{
    selectF(i){
      this.selectReport = this.reports[i]
    },
    selectT(T){
      this.selectThema = T
    }
  },
  data(){
    return{
      reports:[],
      selectReport:{},
      selectThema:"Fight",
    }
  }
}
</script>
