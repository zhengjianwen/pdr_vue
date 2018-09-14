<template>
    <div class="information">
        <headerNav titles="基本信息" show="true"></headerNav>
        <div class="content">
            <div class="showInfor" @click="jumps">
                <van-row>
                    <van-col span="6">
                        评大人号
                    </van-col>
                    <van-col span="16">
                        10086
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
                <van-row>
                    <van-col span="6">
                        昵称
                    </van-col>
                    <van-col span="16">
                        小妮子1974
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
                <van-row>
                     <van-col span="6">
                        生日
                    </van-col>
                    <van-col span="16">
                        1997-08-09
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
                <van-row>
                    <van-col span="6">
                       性别
                    </van-col>
                    <van-col span="16">
                        男
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
                <van-row>
                     <van-col span="6">
                        家乡
                    </van-col>
                    <van-col span="16">
                         山东德州
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
                <van-row>
                      <van-col span="6">
                        个性签名
                    </van-col>
                    <van-col span="16" class="owner">
                         喜欢各种各样的东西，3C手机啊啥的啥的啥的啥的啥的好的
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
            </div>
            <div class="showBtn">
                <ul>
                    <li class="help">吐槽反馈</li>
                    <li class="logout">退出</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import headerNav from "@/components/common/header";
export default {
  name: "information",
  components: {
    headerNav
  },
  methods:{
      jumps(){
          this.$router.push({ path: "/setInfo" });
      }
  }
};
</script>
<style scoped>
@import "../assets/css/information.css";
</style>

