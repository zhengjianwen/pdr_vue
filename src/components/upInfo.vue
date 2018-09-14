<template>
    <div class="upInfo">
        <headerNav titles="发布作品" show="true" text="发布"></headerNav>
          <div class="content">
            <div class="borderBox"></div>
            <div class="upContent">
                <ul class="upChoose">
                    <li class="active">体验</li>
                    <li>攻略</li>
                    <li>晒物</li>
                    <li>吐槽</li>
                    <li>问答</li>
                </ul>
                <div class="inInput">
                    <input type="text" placeholder="请输入你要体验的商品或求助的问题">
                </div>
            </div>
            <div class="editorBox">
                <editor></editor>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from "@/components/common/header";
import editor from "@/components/editor";
export default {
  name: "upInfo",
  components: {
    headerNav,
    editor
  },
  data() {
    return {
      img02: require("../assets/images/image02.png")
    };
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  margin-top: 0.86rem;
  position: relative;
}
.content .borderBox {
  height: 0.08rem;
  width: 100%;
  background: #f4f0f1;
}
.content .upContent,
.editorBox {
  width: 100%;
  padding: 0.1rem 0.48rem;
}
.content .upContent .upChoose {
  width: 100%;
  clear: both;
  overflow: hidden;
}
.content .upContent .upChoose li {
  float: left;
  color: #000;
  font-size: 0.28rem;
  padding: 0.1rem 0.25rem;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  background: #fff;
  margin-right: 0.245rem;
}
.content .upContent .upChoose li:nth-child(5) {
  margin-right: 0;
}
.active {
  border: 1px solid #ff502f !important;
  color: #ff502f !important;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #e0e0e0;
  font-size: 0.28rem;
  font-family: "Microsoft YaHei";
  font-weight: normal;
}
.inInput {
  width: 100%;
  height: 0.8rem;
  background: #fff;
  margin-top: 0.15rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.inInput input {
  width: 100%;
  height: 100%;
  padding-left: 5px;
  border: none;
  font-size: 14px;
}
</style>
