<!--antDesignVue框架提供的布局模板，地址：https://www.antdv.com/components/layout-cn/-->
<!--上中下三层架构，其中中层包含左右2部分，左边是内容区，右边是属性菜单区域-->
<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        Header
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <!--Content-->
          <nuxt/>
        </a-layout-content>
        <a-layout-sider>
          <!--Sider-->
          <app-drawer-admin/>
        </a-layout-sider>
      </a-layout>
      <a-layout-footer>
        Footer
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  import AppDrawerAdmin from '~/components/AppDrawerAdmin.vue';

  export default {

    components: {AppDrawerAdmin}
  }
</script>

<style>
  /*<!--style：layout start-->*/
  #components-layout-demo-basic {
    text-align: center;
  }

  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
  }

  #components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
  }

  #components-layout-demo-basic .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
    /*line-height: 10px;*/
  }

  #components-layout-demo-basic .ant-layout-content {
    background: rgba(16, 142, 233, 1);
    color: #fff;
    /*min-height: 120px;*/
    /*line-height: 10px;*/
  }

  #components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
  }

  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }

  /*<!--style：layout end-->*/
</style>
