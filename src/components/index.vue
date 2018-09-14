<template>
  <div class="indexBar">
    <router-link to="/search">
        <header>
            <van-search placeholder="请输入商品名称或内容"/>
        </header>
    </router-link>
      <!-- 内容 -->
    <div class="content">
        <ul v-for="data in listData">
          <li>
            <div class="toptwo">
              <div class="touxiang">
                <i></i>
                <p>张涨张张张</p>
              </div>
              <div class="mastImg" v-if="!data.images_count">
                  <!-- <img :src="data.images_count"> -->
                  <img :src="img01">
              </div>
              <dl>
                <dd>{{data.title}}</dd>
                <dt>{{data.content}}</dt>
              </dl>
              <div class="bottom">
                  <div class="leftbo">
                      <span>#体验报告</span>
                  </div>
              </div>
            </div>
          </li>
        </ul>
    </div>
    <!-- 底部 -->
    <bot-nav></bot-nav>
  </div>
</template>

<script>
import botNav from "@/components/common/botNav";
export default {
  name: "Index",
  components: {
    botNav
  },
  data() {
    return {
      img01: require("../assets/images/image01.png"),
      img02: require("../assets/images/image02.png"),
      // 列表数据
      listData: []
    };
  },
  created: function() {
    this.axios
      .get("/article/list", { p: 1, self: false })
      .then(res => {
        console.log(this);
        if (res.data.code == "200") {
          this.listData = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
