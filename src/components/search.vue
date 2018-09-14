<template>
    <div class="searchBar">
        <header>
            <van-search placeholder="请输入商品名称或内容" ref="searchInput"/>
            <van-button size="small" @click="search">搜索</van-button>
        </header>
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
  name: "Search",
  components: {
    botNav
  },
  data() {
    return {
      listData: []
    };
  },
  methods: {
    search() {
      let condition = this.$refs.searchInput.val;
      console.log(condition)
    //   this.axios
    //     .get("http://m.pingdaren.cn/api/article/seach", { condition: "1" })
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     .catch((err) => {});
    }
  }
};
</script>

<style scoped>
@import "../assets/css/index.css";
.van-search {
  width: 85%;
  float: left;
}
.van-button {
  float: left;
  min-width: 0.9rem;
  margin-top: 0.15rem;
  background: #ff502f;
  color: #fff;
  border-radius: 4px;
}
</style>
