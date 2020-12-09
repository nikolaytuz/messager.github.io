<template id="">
  <div class="nav py-2 px-4">
    <div class="w-100 d-flex position-relative">
      <router-link v-show="nav_show" :class="'link_nav text-center left_nav '+ (namePage=='Report'?'active_link':'')" to="/">
        <img v-if="namePage=='Report'" src="@/assets/img/Vector.png" class="img_nav" alt="">
        <img v-else src="@/assets/img/Vector-1.png" class="img_nav" alt="">
        <div :class="namePage=='Report'?'active_link':''">Отчеты</div>
      </router-link>
      <router-link v-show="nav_show" :class="'link_nav text-center  center_nav '+ (namePage=='Planets'?'active_link':'')" to="/planets">
        <img v-if="namePage=='Planets'" src="@/assets/img/meteor.png" class="img_nav" alt="">
        <img v-else src="@/assets/img/meteor-1.png" class="img_nav" alt="">
        <div :class="namePage=='Planets'?'active_link':''">Планеты</div>
      </router-link>
      <router-link v-show="nav_show" :class="'link_nav text-center right_nav '+ (namePage=='Messager'?'active_link':'')" to="/messager">
        <img v-if="namePage=='Messager'" src="@/assets/img/messager.png" class="img_nav" alt="">
        <img v-else src="@/assets/img/messager-1.png" class="img_nav" alt="">
        <div :class="namePage=='Messager'?'active_link':''">Чат</div>
      </router-link>
      <a href="#" @click.prevent="nav_show = !nav_show">
        <div class="burger_menu">
          <img src="@/assets/img/Burger.png" alt="">
        </div>
      </a>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default{
    name: 'MenuComponent',
    data(){
      return{
        nav_show: false,
      }
    },
    computed: {
      namePage() {
        return this.$route.name
      },
    },
  }
</script>

<style>
.left_nav{
  left:0;
  top: 55px;
}
.center_nav{
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
      -ms-transform: translate(-50%, 0%);
          transform: translate(-50%, 0%);
}
.right_nav{
  right:0;
  top: 55px;
}
.burger_menu{
  padding-top: 15px;
  text-align: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: #202225;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
      -ms-transform: translate(-50%, 0%);
          transform: translate(-50%, 0%);
}

  .nav{
    bottom: 50px;
    right: 30px;
    position: fixed;
    z-index: 33;
    width: 260px;
    height: 155px;
  }
  .link_nav{
    position: absolute;
    padding-top: 15px;
    text-align: center;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background: #202225;
    color: #DEDEDE;
    font-size: 12px;
  }
  .link_nav:hover{
    color: white;
  }
  .img_nav{
    width: 20px;
    height: 20px;
  }
  .link_nav.active_link{
    background: #EAEAEA;
  }
  .active_link{
    color: #2F3136;
  }
</style>
