<template>
  <div id="app" class="fon">
    <div class="mask">

    </div>
    <MenuComponent />
    <div class="container_messeger mx-auto">
      <router-view/>
    </div>
  </div>
</template>

<script type="text/javascript">
import MenuComponent from '@/components/MenuComponent.vue'
export default {
  name: 'App',
  components: {
    MenuComponent,
  },
}

</script>

<style media="screen">
.mask{
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #00000070;
  position: absolute;
}
.fon{
  background: url(/img/wallhave.jpg);
}
.container_messeger{
  width: 100%;
  max-width: 1390px;
}
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
</style>
