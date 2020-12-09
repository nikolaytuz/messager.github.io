<template id="">
<div class="" style="">
	<table class=" tableStyle" :style="{width: widthTable+'px'}"  v-columns-resizable>
    <thead>
			<tr><th v-for="column in gridColumns"  :key="column.name" class="text-center" :colspan="column.childrens.length">{{column.title}} </th></tr>

			<tr><th @click="sortBy(child_col.name, child_col.sort)" :key="child_col.name" class="link_cursor"  v-for="child_col in childrens_coolumns" :style="{width: child_col.width}"  >
          {{child_col.title}}
        <img v-if="(columnSort==child_col.name&&keySort==1)" src="@/assets/img/play1.png" height="6px" alt="">
        <img v-if="(columnSort==child_col.name&&keySort==2)" src="@/assets/img/play2.png" height="6px" alt="">
      </th></tr>
		</thead>
		<tbody>
      <RowComponent v-for="(row, index) in sortData" :name="row.name" :children="row.childrens" :ofset="0" :types="row.type" :key="row.name+index"></RowComponent>
		</tbody>
	</table>

</div>
</template>

<script type="text/javascript">
import RowComponent from "./RowComponent.vue"
export default {
  components:{
    RowComponent,
  },
	data() {
		return {
      keySort: 1,
      columnSort: "",
      gridColumns: [
        {title: "Планета", childrens:[
          {title: "г", width:"15px", name:"galaktick", sort:false, },
          {title: "c", width:"15px", name:"sistem", sort:false, },
          {title: "Название", width:"130px", name:"title", sort:true, },
          {title: "Альянс", width:"120px", name:"alns", sort:true, },
          {title: "Ранг", width:"60px", name:"rang", sort:true, },
        ]},
        {title: "Ресурсы", childrens:[
          {title: "Ti", width:"60px", name:"resTi", sort:true, },
          {title: "Si",  width:"60px", name:"resSi", sort:true, },
          {title: "Am", width:"60px", name:"resAm", sort:true, },
          {title: "Валюта", width:"80px", name:"resVal", sort:true, },
          {title: "Шатлы", width:"250px", name:"resShatls", sort:true, },
        ]},
        {title: "Обломки", childrens:[
          {title: "Ti", width:"60px", name:"obTi", sort:true, },
          {title: "Si", width:"60px", name:"obSi", sort:true, },
          {title: "Am", width:"60px", name:"obAm", sort:true, },
        ]},
        {title: "Боевые единицы", childrens:[
          {title: "Оборона", width:"90px", name:"boOb", sort:true, },
          {title: "Флот", width:"80px", name:"boFl", sort:true, },
          {title: "ЗБ", width:"80px", name:"boaZb", sort:true, },
          {title: "ТП", width:"80px", name:"boTp", sort:true, },
        ]},
        {title: "Стоимость", childrens:[
          {title: "Оборона", width:"80px", name:"stOb", sort:true, },
          {title: "Флот", width:"80px", name:"stfl", sort:true, },
        ]},
        {title: "Первый залп", childrens:[
          {title: "Оборона", width:"80px", name:"perOb", sort:true, },
          {title: "Флот", width:"80px", name:"perFl", sort:true, },
        ]},
        {title: "Уровни", childrens:[
          {title: "Ti", width:"80px", name:"levTi", sort:true, },
          {title: "Si", width:"80px", name:"levSi", sort:true, },
          {title: "Am", width:"80px", name:"levAm", sort:true, },
          {title: "Пс", width:"80px", name:"levPs", sort:true, },
          {title: "Бд", width:"80px", name:"levBd", sort:true, },
          {title: "Ад", width:"80px", name:"levAd", sort:true, },
          {title: "Ппд", width:"80px", name:"levPpd", sort:true, },
        ]},
        {title: "Дополнительно", childrens:[
          {title: "Карта", width:"80px", name:"dopMap", sort:true, },
          {title: "Скан", width:"80px", name:"dopScan", sort:true, },
          {title: "Атака", width:"80px", name:"dopAtaka", sort:true, },
          {title: "Комментарий", width:"80px", name:"dopCom", sort:true, },
        ]},
      ],
      gridData: [
        {type: "list", name: "Галактика", childrens:[
          {type: "list", name: "Система", childrens:[
            {type: "row", childrens:[{title:"Колония 2",alns:"Актив",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
            {type: "row", childrens:[{title:"Колония 1",alns:"wds",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
            {type: "row", childrens:[{title:"Колония 3",alns:"Актив",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
          ]},
          {type: "list", name: "Система", childrens:[
            {type: "row", childrens:[{title:"Колония 2",alns:"Актив",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
            {type: "row", childrens:[{title:"Колония 1",alns:"wds",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
            {type: "row", childrens:[{title:"Колония 3",alns:"Актив",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
          ]}
        ]},
        {type: "list", name: "Галактика", childrens:[
          {type: "list", name: "Система", childrens:[
            {type: "row", childrens:[{title:"Колония 2",alns:"Актив",rang:"152",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
            {type: "row", childrens:[{title:"Колония 1",alns:"wds",rang:"122",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
            {type: "row", childrens:[{title:"Колония 3",alns:" ",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
          ]}
        ]},
        {type: "list", name: "Галактика", childrens:[
          {type: "list", name: "Система", childrens:[
            {type: "row", childrens:[{title:"Колония 2",alns:"Актив",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
            {type: "row", childrens:[{title:"Колония 1",alns:"wds",rang:"12",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
            {type: "row", childrens:[{title:"Колония 3",alns:"Актив",rang:"12312",resTi:"1233",resSi:"123",resAm:"34",resVal:"234",resShatls:"1231423 311231 234242",obTi:"122",obSi:"324",obAm:"435",}]},
          ]}
        ]},
      ],
		}
	},
  computed:{
    widthTable(){ //вычисляет ширину таблицы.
      let sum = this.childrens_coolumns.reduce((sum, current)=>{
        return sum + Number.parseInt(current.width)
      },0)
      return sum
    },
    childrens_coolumns(){
      let childs = []
      this.gridColumns.forEach((item) => {
        childs = childs.concat(item.childrens)
      });
      return childs
    },
    sortData() {
      let gridData = this.sort_util(this.gridData)
      return gridData
    },

  },
  methods:{
    sortBy(name, sort){
      if (!sort) return false

      if (this.keySort == 2 || this.columnSort!=name) {
        this.keySort = 1
      }else {
        this.keySort++
      }

      this.columnSort = name

    },
    sort_util(data){
      if (this.keySort == 0) {
        return data
      }
      if (data[0].childrens[0].type=="list") {
        data.forEach((item) => {
            this.sort_util(item.childrens)
        })
      }
      if (data[0].childrens[0].type=="row") {
        data.forEach((item) => {
          // console.log(item.childrens);
          this.sort1(item.childrens)
        })
      }
      if (data[0].type=="row") {
          this.sort1(data)
      }

      return data
    },
    sort1(data){
      // console.log('sort');
      return data.sort((a,b)=>{
        if (a.childrens[0][this.columnSort] > b.childrens[0][this.columnSort]) {
          return (this.keySort==1)?1:-1;
        }
        if (a.childrens[0][this.columnSort] < b.childrens[0][this.columnSort]) {
          return (this.keySort==1)?-1:1;
        }
        return 0;
      })

    }
  }
}
</script>

<style media="screen" scoped="">

.tableStyle {
  /* table-layout: fixed; */
  width: 2000px;
	font-size: 13px;
	color: #e6e6e6;
}
/deep/ .border-none{
  border: none!important;
}
.link_cursor{
  cursor:pointer;
}

/deep/th {
	border: 1px solid #606060;
  font-weight: 400;
	padding: 0 10px;
	padding-bottom: 5px;
}
/deep/ td {
	border: 1px solid #606060;
  font-size: 12px;
	padding: 0 10px;
	padding-bottom: 5px;
}
</style>
