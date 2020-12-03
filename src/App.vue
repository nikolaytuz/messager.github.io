<template>
  <div id="app">
    <div class="nav py-2 px-4">
        <router-link class="link_nav text-center mx-3" to="/">
          <img v-if="namePage=='Report'" src="./assets/img/Vector.png" class="img_nav" alt="">
          <img v-else src="./assets/img/Vector-1.png" class="img_nav" alt="">
          <div :class="namePage=='Report'?'active_link':''">Отчеты</div>
        </router-link>
        <router-link class="link_nav text-center mx-3" to="/planets">
          <img v-if="namePage=='Planets'" src="./assets/img/meteor.png" class="img_nav" alt="">
          <img v-else src="./assets/img/meteor-1.png" class="img_nav" alt="">
          <div :class="namePage=='Planets'?'active_link':''">Планеты</div>
        </router-link>
        <router-link class="link_nav text-center mx-3" to="/messager">
          <img v-if="namePage=='Planets'" src="./assets/img/messager.png" class="img_nav" alt="">
          <img v-else src="./assets/img/messager-1.png" class="img_nav" alt="">
          <div :class="namePage=='Messager'?'active_link':''">Чат</div>
        </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">

export default {
  computed: {
    namePage() {
      return this.$route.name
    }
  },
}

</script>

<style>
  a{
    color: inherit;
  }
  a:hover{
    text-decoration: none;
    color: inherit;
  }
  .n{font-weight: normal;}
  .m{font-weight: 500;}
  .b{font-weight: 700;}
  .nav{
    background: #202225;
    width: 100%;
    height: 67px;
  }
  .link_nav{
    color: #DEDEDE;
  }
  .link_nav:hover{
    color: white;
  }
  .img_nav{
    width: 25px;
    height: 25px;
  }
  .active_link{
    color: #EA7B15;
  }
</style>
