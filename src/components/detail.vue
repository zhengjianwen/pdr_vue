<template>
    <div class="detail">
        <headerNav titles="帖子详情" show="true"></headerNav>
        <div class="content">
            <div style="width:100%;height:0.08rem;background: #F4F0F1;"></div>
            <div class="top clear">
                <div class="pic"></div>
                <span class="name">长孙无名2431</span>
            </div>
            <ul class="cate clear">
                <li>@体验报告</li>
                <li>@体验报告</li>
            </ul>
            <div class="tieContent">
                <div class="title">iphoneX用了三个月的感受</div>
                <!-- <div class="time">2018.3.9&nbsp;&nbsp;12:20:00</div> -->
                <div class="discuss clear">
                    <div class="peoNum">
                        <span>2988</span> 已参与讨论
                    </div>
                    <span class="peoheart">
                        <i class="iconfont icon-heart2"></i>
                        3800
                    </span>
                </div>
                <p class="textcon">
                    体验：相对来说不咋地啊 体验：相对来说不咋地啊 体验：相对来说不咋地啊 体验：相对来说不咋地啊 体验：相对来说不咋地啊 体验：相对来说不咋地啊 体验：相对来说不咋地啊 体验：相对来说不咋地啊 体验：相对来说不咋地啊
                </p>
                <ul class="img clear">
                    <li>
                        <img :src="img02">
                    </li>
                    <li>
                        <img :src="img02">
                    </li>
                    <li>
                        <img :src="img02">
                    </li>
                    <li>
                        <img :src="img02">
                    </li>
                </ul>
            </div>
            <ul class="disAll">
                <li>
                    <div class="clear">
                        <div class="pic"></div>
                        <span class="name">长孙无名2431</span>
                    </div>
                    <div class="dis">
                        <p>体验报告：iphonex用了半年感觉不是特别好有点卡，感觉很垃圾。不喜欢。吐槽,大家有问题么?</p>
                        <div class="timeA">
                            <span class="timeB">2018.3.9&nbsp;&nbsp;12:22:00</span>
                            <span class="timeheart">
                                <i class="iconfont icon-heart2"></i>
                                3800
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
         <footer>
            <input type="text" placeholder="想说点儿什么！！" id="say">
            <button type="button" class="mui-btn">发送</button>
        </footer>
    </div>
</template>

<script>
import headerNav from "@/components/common/header";
export default {
  name: "detail",
  components: {
    headerNav
  },
  data() {
    return {
      img02: require("../assets/images/image02.png")
    };
  }
};
</script>

<style scoped>
.detail {
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
  background: #fff;
}
/* F4F0F1 */
.content .top {
  padding: 0.2rem 0.4rem 0;
}
.content .top .pic {
  width: 0.48rem;
  height: 0.48rem;
  background: #ff502f;
  float: left;
  margin-right: 0.12rem;
}
.content .top .name {
  display: block;
  font-size: 0.28rem;
  color: #333;
  float: left;
  height: 0.48rem;
  line-height: 0.48rem;
}
.content .cate {
  font-size: 0.3rem;
  margin-top: 0.08rem;
  padding: 0 0.4rem;
}
.content .cate li {
  float: left;
  margin-right: 0.08rem;
}
.content .tieContent {
  width: 100%;
  padding: 0 0.4rem;
}
.content .tieContent .title {
  width: 100%;
  font-size: 0.32rem;
  color: #000;
  margin-top: 0.24rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.1rem;
}
.content .tieContent .time {
  width: 100%;
  font-size: 0.2rem;
  color: #ff502f;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.1rem;
}
.content .tieContent .discuss {
  width: 100%;
  margin-top: 0.12rem;
  font-size: 0.28rem;
}
.content .tieContent .discuss .peoNum {
  float: left;
}
.content .tieContent .discuss .peoheart {
  float: right;
  color: #ff502f;
}
.content .tieContent .textcon {
  color: #333;
  font-size: 0.3rem;
  margin-top: 0.05rem;
}
.content .tieContent .img {
  width: 100%;
  padding-bottom: 0.16rem;
  border-bottom: 1px solid #eaeaea;
}
.content .tieContent .img li {
  width: 32%;
  margin-right: 1%;
  float: left;
  margin-top: 0.16rem;
}
.content .tieContent .img li img {
  width: 100%;
}

.disAll {
  width: 100%;
  padding: 0.16rem 0.4rem;
  margin-top: 0.1rem;
}
.disAll li {
  width: 100%;
}
.disAll li .pic {
  width: 0.48rem;
  height: 0.48rem;
  background: #ff502f;
  float: left;
  margin-right: 0.12rem;
}
.disAll li .name {
  display: block;
  font-size: 0.28rem;
  color: #333;
  float: left;
  height: 0.48rem;
  line-height: 0.48rem;
}

.disAll li .dis {
  padding-left: 0.48rem;
  margin-top: 0.12rem;
}
.disAll li .dis p {
  color: #333;
  font-size: 0.3rem;
}
.disAll li .dis .timeA {
  font-size: 0.2rem;
}
.dis .timeB {
  color: #ff502f;
}
.disAll li .dis .timeheart {
  float: right;
}

.content .tieContent .discuss .peoNum span {
  color: #ff502f;
}
body {
  position: relative;
  margin-top: 44px;
  height: 100%;
  background: #fff;
}

footer {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  width: 100%;
  height: 0.92rem;
  background: #f4f0f1;
  padding: 0.2rem 0.4rem;
}
footer #say {
  padding: 0 6px;
  height: 0.56rem;
  border: 1px solid #f4f0f1;
  border-radius: 6px;
  font-size: 0.28rem;
  width: 82%;
  float: left;
}
footer .mui-btn {
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  width: 14%;
  margin-left: 2%;
  padding: 0.08rem 0.06rem;
  font-size: 0.24rem;
  color: #fff;
  margin-top: 1px;
  font-weight: 400;
  line-height: 1.42;
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  transition: all;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  text-align: center;
  vertical-align: top;
  white-space: nowrap;
  background: #ff502f;
}
</style>

