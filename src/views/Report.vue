<template>
  <div class="container-fluid">
    <div class="row">
      <LeftComponent :selectF="selectF" :selectReport="selectReport" :reports="reports" />
      <RigthComponent :selectReport="selectReport"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftComponent from '@/components/report/LeftComponent.vue'
import RigthComponent from '@/components/report/RigthComponent.vue'

export default {
  name: 'Home',
  components: {
    LeftComponent,
    RigthComponent
  },
  methods:{
    selectF(i){
      this.selectReport = this.reports[i]
    }
  },
  data(){
    return{
      reports:[
        {
          tema:'Шпионский доклад',
          ot:'Система',
          id: 0,
          date:'15.01',
          data:{
            col1:{
              name:"Атакующий",
              polya:[
                {title: "Общие потери", value: 0},
                {title: "Титан", value: 0},
                {title: "Кремний", value: 0},
              ],
            },
            col2:{
              name:"Обороняющийся",
              polya:[
                {title: "Общие потери", value: 0},
                {title: "Титан", value: 1515},
                {title: "Кремний", value: 201},
              ],
            },

          }
        },
        {
          tema:'Боевой доклад',
          ot:'Система',
          id: 1,
          date:'15.02',
          data:{
            col1:{
              name:"Атакующий",
              polya:[
                {title: "Общие потери", value: 0},
                {title: "Титан", value: 0},
                {title: "Кремний", value: 0},
              ],
            },
            col2:{
              name:"Обороняющийся",
              polya:[
                {title: "Общие потери", value: 0},
                {title: "Титан", value: 1515},
                {title: "Кремний", value: 201},
              ],
            },

          }
        },
      ],
      selectReport:{},
    }
  }
}
</script>
