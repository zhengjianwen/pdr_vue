<template>
    <div class="look">
        <headerNav titles="我的关注" show="true"></headerNav>
        <div class="content">
            <div style="width:100%;height:0.08rem;background:#F4F0F1;"></div>
            <ul class="fansList">
                <li class="clear">
                    <span class="pic"></span>
                    <div class="info">
                        <span>王小明同学</span>
                        <p>非常喜欢使用iPhone,是一种信仰</p>
                    </div>
                    <div class="lockBtn">
                        已关注
                    </div>
                </li>
                <li class="clear">
                    <span class="pic"></span>
                    <div class="info">
                        <span>王小明同学</span>
                        <p>非常喜欢使用iPhone,是一种信仰</p>
                    </div>
                    <div class="lockBtn">
                        互相关注
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headerNav from "@/components/common/header";
export default {
  name: "look",
  components: {
    headerNav
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
@import "../../assets/css/fans.css";
.look{height: 100%;}
</style>
