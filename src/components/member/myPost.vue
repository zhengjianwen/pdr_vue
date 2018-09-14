<template>
    <div class="myPost">
        <headerNav titles="我的小报" show="true"></headerNav>
        <div class="content">
            <ul>
                <li>
                    <div class="top">
                        <div class="left">
                            <span class="touxiang">
                                <i></i>
                                <p>张大仙也不美</p>
                            </span>
                            <dl>
                                <dd>评价褒贬不一，iPhone X到底怎么样？</dd>
                                <dt>办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁</dt>
                            </dl>
                        </div>
                        <div class="right flex-1">
                            <img :src="img02">
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="leftbo">
                            <span>@假货爆料</span>
                            <span>@W3C</span>
                        </div>
                        <div class="rightbo">
                            <span>
                                <i class="iconfont icon-heart2"></i>
                                3800
                            </span>
                            <span>
                                <i class="iconfont icon-jilu"></i>
                                6666
                            </span>
                            <span>
                                <i class="iconfont icon-close"></i>
                                删除
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="toptwo">
                        <div class="touxiang">
                            <i></i>
                            <p>张大仙也不美</p>
                        </div>
                        <dl>
                            <dd>评价褒贬不一，iPhone X到底怎么样？</dd>
                            <dt>办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁</dt>
                        </dl>
                    </div>
                    <div class="bottom">
                        <div class="leftbo">
                            <span>@假货爆料</span>
                            <span>@W3C</span>
                        </div>
                        <div class="rightbo">
                            <span>
                                <i class="iconfont icon-heart2"></i>
                                3800
                            </span>
                            <span>
                                <i class="iconfont icon-jilu"></i>
                                6666
                            </span>
                            <span>
                                <i class="iconfont icon-close"></i>
                                删除
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="toptwo">
                        <div class="touxiang">
                            <i></i>
                            <p>张大仙也不美</p>
                        </div>
                        <div class="mastImg">
                            <img :src="img01">
                        </div>
                        <dl>
                            <dd>评价褒贬不一，iPhone X到底怎么样？</dd>
                            <dt>办公室游戏兼得，高性价比游戏本自大号的办公室游戏兼得，高性价比游戏本大号的不信心谁谁谁谁谁谁谁谁谁谁谁谁</dt>
                        </dl>
                    </div>
                    <div class="bottom">
                        <div class="leftbo">
                            <span>@假货爆料</span>
                            <span>@W3C</span>
                        </div>
                        <div class="rightbo">
                            <span>
                                <i class="iconfont icon-heart2"></i>
                                3800
                            </span>
                            <span>
                                <i class="iconfont icon-jilu"></i>
                                6666
                            </span>
                            <span>
                                <i class="iconfont icon-close"></i>
                                删除
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import headerNav from "@/components/common/header";
export default {
  name: "myPost",
  components: {
    headerNav
  },
  data() {
    return {
      img01: require("../../assets/images/image01.png"),
      img02: require("../../assets/images/image02.png")
    };
  }
};
</script>

<style scoped>
@import '../../assets/css/myPost.css';
</style>
