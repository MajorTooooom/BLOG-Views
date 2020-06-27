<!--小组件：侧边抽屉栏第一层中的主目录导航-->
<template>
  <div>
    <a-list size="small" bordered :data-source="navigationMenus">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <!--<a href="javascript:;"></a>-->
        <nuxt-link :to="{name:item.menuLink}">{{ item.name }}</nuxt-link>
        <span>
          <a-popover :title="item.name" placement="right">
          <a-button type="link" block>
            <nuxt-link :to="{name:item.menuLink}">
              <a-icon :type="item.aIconType"/>
            </nuxt-link>
          </a-button>
          <template slot="content">
            <p>{{ item.dec }}</p>
          </template>
        </a-popover>
        </span>
      </a-list-item>
      <!--div slot="footer">Footer</div>-->
    </a-list>
  </div>
</template>
<script>
  import $ from "jquery";
  import axios from "axios";

  export default {
    data() {
      return {
        navigationMenus: [
          //aIconType：对应是antDesignVue UI框架的图标样式值；menuLink：自己定义的属性名，用于传递跳转链接
          {name: '首页', dec: '回到首页', aIconType: 'home', menuLink: 'index'},//index就是全局的首页
          {name: '技术交流', dec: '技术交流', aIconType: 'border-outer', menuLink: 'article'},
          {name: '资源分享', dec: '资源分享', aIconType: 'check', menuLink: 'share'},
          {name: '朝花夕拾', dec: '朝花夕拾', aIconType: 'redo', menuLink: 'index'},
          {name: '关于我', dec: '关于我', aIconType: 'radar-chart', menuLink: 'index'}
        ]
      };
    },
    mounted() {
    }
  };
</script>

<style scoped>
</style>
