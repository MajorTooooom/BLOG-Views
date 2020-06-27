<!--作用：侧边导航栏-->
<!--含：触发按钮+2层抽屉，第一层主要展示博主个人信息，第二层待定。每一层的细节内容从其他components引入组件化开发-->
<!--全局; UI by ant-design-vue-->
<template>
  <div class="centerdiv">
    <a-button type="dashed" @click="showDrawer" class="menuBtn" ghost icon="menu-fold">
      menu
    </a-button>
    <!--第一层抽屉-->
    <a-drawer style="border-radius: 25px" width="350" :closable="false" :visible="visible" @close="onClose" placement="left">
      <!--第二层Drawer（由第一层的按钮触发）-->
      <a-drawer width="250" :closable="false" :visible="childrenDrawer" @close="onChildrenDrawerClose" placement="left"></a-drawer>
      <!--博主信息展示-->
      <div class="centerdiv">
        <div @click="showChildrenDrawer">
          <!--头像-->
          <a-avatar :size="112" icon="user"/>
        </div>
        <br/>
        <br/>
        <!--博名+气泡文字-->
        <a-popover title="多罗罗丶" placement="right">
          <p style="font-family: 幼圆">多罗罗丶</p>
          <template slot="content">
            <p>《多罗罗》是由手冢治虫所著漫画。</p>
            <p>讲述古日本一个君不君臣不臣的时代，诸侯混战，民不聊生，一名武士醍醐景光为了出人头地、统一天下，</p>
            <p>而将自己即将出生的儿子献祭给48个魔神的故事。</p>
            <p>其名曰“百鬼丸”。为了夺回肉身，百鬼丸踏上了寻找魔王的复仇之路。</p>
            <p>旅途中，百鬼丸遇到了女扮男装的侠盗多罗罗。</p>
            <p>至于我为什么一直使用“多罗罗丶”的昵称？也许是觉得像她一样吧</p>
          </template>
        </a-popover>
      </div>
      <div class="centerdiv">
        <app-cata-log><!--主菜单导航--></app-cata-log>
      </div>
      <!--第一层侧边栏的底部-->
      <div :style="{position: 'absolute',bottom: 0,width: '100%',padding: '10px 16px',textAlign: 'center',left: 0,background: '#fff',borderRadius: '0 0 4px 4px'}">
        <a-button type="primary" @click="showChildrenDrawer">
          联系我
        </a-button>
        <a-button type="primary" @click="onClose">
          提交
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
  import $ from "jquery";
  import AppCataLog from "~/components/AppCataLog.vue";

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
      }
    },
    mounted() {
      //jQuery
      $(function () {
        $('html,body').animate({scrollTop: 0}, 800);//1秒内回到顶部
      });
    },
    components: {AppCataLog}
  };
</script>

<style scoped>
  .menuBtn {
    position: fixed;
    /*按钮靠左边*/
    left: 25px;
    top: 60px;
  }

  .downBtnGroup {
    position: fixed;
    bottom: 1.5%;
    text-align: center;
  }
</style>


