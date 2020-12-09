<template id="">
  <fragment>
    <tr @click="activate()" :class="{active: active, dnone:cshow}">
      <td class="border-none" v-for="i in ofset" :key="i"></td>
      <td v-if="types=='list'" colspan="100%">{{name}}
        <img v-if="show" src="@/assets/img/Arrow1.png" height="4px" alt="">
        <img v-else src="@/assets/img/Arrow2.png" width="4px" height="8px" alt="">
      </td>
      <td v-else="" v-for="(col, index) in children[0]"  :key="'col'+index">{{col}}</td>
    </tr>
    <RowComponent :cshow="showFun" v-for="(row, index) in childrens_par"  :columns="row.columns" :name="row.name" :ofset="ofset+1" :children="row.childrens" :types="row.type" :key="'row'+ofset+index"></RowComponent>
 </fragment>
</template>

<script type="text/javascript">
  export default{
    name: "RowComponent",
    props:[
      "name",
      "types",
      "ofset",
      "children",
      "columns",
      "cshow",
    ],
    data(){
      return{
        active: false,
        show: false,
      }
    },
    methods:{
      activate(){
        if (this.types=="row") {
          this.active=!this.active
        }
        if (this.types=="list") {
          this.show = !this.show
        }

      }
    },
    computed:{
      showFun(){
        if (this.types=='list' && this.cshow) {
          return this.cshow
        }
        return this.show
      },
      childrens_par(){
        if (this.types == 'list' ) {
          return this.children
        }
        return []
      }
    }
  }
</script>
<style media="screen" scoped="">
  .dnone{
    display: none;
  }
  tr:hover{
    cursor: pointer;
    background: #0000001c;
  }
  .active{
    background: #006e791f;
    color: white;
  }
  .border-none{
    background: #474B50!important;
  }
</style>
