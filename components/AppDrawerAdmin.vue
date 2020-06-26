<!--侧边导航栏-->
<!--含：触发按钮+2层抽屉，第一层主要展示博主个人信息，第二层待定。每一层的细节内容从其他components引入组件化开发-->
<!--全局; UI by ant-design-vue-->
<template>
  <a-row>
    <a-col :span="24">
      <a-button type="dashed" @click="showDrawer" class="menuBtn" ghost="true" icon="menu-fold">
        menu
      </a-button>
      <a-drawer width="450" :closable="false" :visible="visible" @close="onClose" placement="left">
        <a-col :span="24">
          <div class="centerDiv">
            <a-button type="primary" @click="showChildrenDrawer">
              Two-level drawer
            </a-button>
          </div>
        </a-col>
        <!--第三层Drawer-->
        <a-drawer width="300" :closable="false" :visible="childrenDrawer" @close="onChildrenDrawerClose" keyboard="true" placement="left">
          <div class="centerDiv">
            <a-button type="primary" @click="showChildrenDrawer">
              This is two-level drawer
            </a-button>
          </div>
        </a-drawer>
      </a-drawer>
    </a-col>
  </a-row>
</template>
<script>
  import $ from "jquery";

  export default {
    data() {
      return {
        visible: false,
        childrenDrawer: false,
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
      showChildrenDrawer() {
        this.childrenDrawer = true;
      },
      onChildrenDrawerClose() {
        this.childrenDrawer = false;
      },
    },
    mounted() {
      //jQuery
      $(function () {
        $('html,body').animate({scrollTop: 0}, 800);//1秒内回到顶部
      });
    }
  };
</script>

<style scoped>
  .menuBtn {
    position: fixed;
    left: 25px;
    top: 25px;
  }

</style>

