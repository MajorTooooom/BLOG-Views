<template>
  <div>
    <a id="aaaaaaa" href>啊啊啊啊啊</a>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "index",
  mounted() {
    $("#aaaaaaa").click(function() {
      alert("啊啊啊啊啊啊啊啊啊啊啊啊啊啊");
    });
  }
};
</script>
<style scoped>
</style>
