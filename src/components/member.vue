<template>
    <div class="member">
        <headerNav titles="个人中心" show="true"></headerNav>
        <div class="content">
            <div class="firstP flex" @click="jump">
                <div class="left">
                </div>
                <div class="right flex-1">
                    <div class="nickName">
                        <div class="name">王小明同学</div>
                        <van-icon name="arrow" />
                    </div>
                    <ul class="logo clear">
                        <li>男</li>
                        <li>21</li>
                        <li>山东省</li>
                    </ul>
                    <span class="qianM">
                        非常喜欢用iphone，也算是一种信仰!
                    </span>
                </div>
            </div>
            <ul class="cateUl clear">
                <li class="myPost" @click="jump">
                    <span>我的小报</span>
                    <div class="num">
                        <span class="numshow">763</span>
                         <van-icon name="arrow" />
                    </div>
                </li>
                <li class="comments" @click="jump">
                    <span>我的评论</span>
                    <div class="num">
                        <span class="numshow">1863</span>
                         <van-icon name="arrow" />
                    </div>
                </li>
                <li class="mylike" @click="jump">
                    <span>我的喜欢</span>
                    <div class="num">
                        <span class="numshow">63</span>
                         <van-icon name="arrow" />
                    </div>
                </li>
                <li class="look" @click="jump">
                    <span>我的关注</span>
                    <div class="num">
                        <span class="numshow">763</span>
                         <van-icon name="arrow" />
                    </div>
                </li>
                <li class="fans" @click="jump">
                    <span>我的粉丝</span>
                    <div class="num">
                        <span class="numshow">763</span>
                         <van-icon name="arrow" />
                    </div>
                </li>
                <li class="news" @click="jump">
                    <span>我的消息</span>
                    <div class="num">
                        <span class="numshow">999</span>
                         <van-icon name="arrow" />
                    </div>
                </li>
            </ul>
        </div>
        <!-- 底部 -->
        <bot-nav></bot-nav>
    </div>
</template>
<script>
import headerNav from "@/components/common/header";
import botNav from "@/components/common/botNav";
let clName;
export default {
  name: "member",
  components: {
    headerNav,
    botNav
  },
  methods: {
    jump(event) {
      clName = event.currentTarget.className;
      switch (clName) {
        case "myPost":
          this.$router.push({ path: "/myPost" });
          break;
        case "comments":
          this.$router.push({ path: "/comments" });
          break;
        case "mylike":
          this.$router.push({ path: "/myLike" });
          break;
        case "look":
          this.$router.push({ path: "/look" });
          break;
        case "fans":
          this.$router.push({ path: "/fans" });
          break;
        case "firstP flex":
          this.$router.push({ path: "/information" });
          break;
      }
    }
  },
  data() {
    return {
      image01: require("@/assets/images/image01.png")
    };
  }
};
</script>

<style scoped>
.member {
  height: 100%;
}
.content {
  margin-top: 0.88rem;
  width: 100%;
  background: #fff;
  height: 100%;
  padding: 0.2rem 0.76rem;
}
.firstP {
  width: 100%;
}
.firstP .left {
  width: 2rem;
  height: 2rem;
  float: left;
  border: 1px solid #fff;
  border-radius: 50px;
  background: url("../assets/images/image01.png") no-repeat;
  background-size: 100% 100%;
}
.firstP .right {
  padding: 0.48rem 0rem 0rem 0.44rem;
}
.right .nickName {
  width: 100%;
}
.right .nickName .name {
  display: inline-block;
  color: #000;
  font-size: 0.3rem;
}
.right .nickName .van-icon {
  float: right;
  font-size: 14px;
  line-height: 1.2;
}
.right .logo {
  width: 100%;
  margin-top: 0.08rem;
}
.right .logo li {
  font-size: 0.2rem;
  float: left;
  background: #ff502f;
  color: #fff;
  padding: 0 0.12rem;
  margin-right: 0.08rem;
  border-radius: 6px;
}
.qianM {
  font-size: 0.2rem;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-top: 0.1rem;
}
.cateUl {
  width: 100%;
  margin-top: 0.5rem;
}
.cateUl li {
  width: 100%;
  color: #000;
  font-size: 0.32rem;
  height: 1rem;
  line-height: 1rem;
  float: left;
}
.cateUl li .num {
  float: right;
}
.cateUl li .num .van-icon {
  font-size: 12px;
  color: #000;
}
.numshow {
  font-size: 0.28rem;
  color: #ff502f;
  font-weight: normal;
}
</style>
