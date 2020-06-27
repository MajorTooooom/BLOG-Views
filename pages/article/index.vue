<template>
  <div>
    <p>信息来自`store/index.js`下：token</p>
  </div>
</template>

<script>

  export default {
    name: "index",
    // 下面的两种方式都可以；layout属性其实是将这个vue页面跟布局vue进行关联的属性，layout的值为layout文件夹下所对应布局的名字
    layout: 'layout_article',
    // layout: function (context) {return 'layout_article'}
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
