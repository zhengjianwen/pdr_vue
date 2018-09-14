<template>
    <van-nav-bar :title="titles" :right-text="text">
        <van-icon name="arrow-left" slot="left" v-if="show" @click="back"/>
    </van-nav-bar>
</template>
<script>
export default {
  name: "headerNav",
  props: ["titles", "show", "text"],
  methods: {
    back() {
      this.$router.back(-1);
    }
  }
};
</script>
<style scoped>
.van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999 !important;
  -webkit-box-shadow: 0 1px 6px #ccc;
  box-shadow: 0 1px 6px #ccc;
}
.van-nav-bar .van-icon {
  color: #000;
}
</style>

