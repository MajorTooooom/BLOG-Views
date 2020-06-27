<template>
  <div>
    <div id="wallpaper" class="centerDiv">
      <app-drawer-admin/>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  import AppDrawerAdmin from '~/components/AppDrawerAdmin.vue';

  export default {
    name: "index",
    mounted() {
      //jQuery
    },
    components: {
      AppDrawerAdmin
    }
  };
</script>
<style scoped>
  #wallpaper {
    /*background-image: url('https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@master/img/webp/home_top_bg.webp');*/
    background-image: url('~static/img/wallpaper-3.png');
    /*vh和vw是浏览器宽高*/
    height: calc(100vh);
    background-size: 100% 100%;
  }
</style>
