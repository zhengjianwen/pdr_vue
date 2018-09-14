<template>
    <div class="information">
        <headerNav titles="基本信息" show="true"></headerNav>
        <div class="content">
            <div class="showInfor">
                <van-row>
                    <van-col span="6">
                        昵称
                    </van-col>
                    <van-col span="16">
                        <input type="text">
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
                <van-row>
                     <van-col span="6">
                        生日
                    </van-col>
                    <van-col @click.native="showTime" span="16" id="birTime">
                        {{timeShow?timeShow:'2018-12-25'}}
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
                        <select id="sex">
                            <option value="">--请选择--</option>
                            <option value="1">男</option>
                            <option value="2">女</option>
                        </select>
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
                <van-row>
                     <van-col span="6">
                        家乡
                    </van-col>
                    <van-col span="16" id="address"  @click.native="areaLook">
                         {{areaShow?areaShow:'山东德州'}}
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
                         <input type="text">
                    </van-col>
                     <van-col span="2">
                        <van-icon name="arrow" />
                     </van-col>
                </van-row>
            </div>
            <van-datetime-picker v-model="currentDate" v-show="showNow" type="date" 
            :min-date="minDate" :max-date="maxDate" @cancel="onCancel"  @confirm="onConfirm"/>
            <div class="backdrop" style="opacity:1" v-show="showNow" @click="onCancel"></div>
            <div class="backdrop" style="opacity:1" v-show="areaPs" @click="areaHide"></div>
            <!-- 三级联动 -->
            <van-area :area-list="areaList" @cancel="areaHide"  @confirm="areaSure" v-show="areaPs"/>
        </div>
    </div>
</template>
<script>
import headerNav from "@/components/common/header";
import area from "@/assets/js/area.js";
export default {
  name: "setInfo",
  components: {
    headerNav
  },
  data() {
    return {
      currentDate: new Date(),
      minDate: new Date("1900", "01", "01"),
      maxDate: new Date(),
      //  时间控件展示隐藏
      showNow: false,
      // 时期
      timeShow: "",
      areaList: area,
      areaShow: "",
      areaPs: false
    };
  },
  methods: {
    showTime() {
      //点击后picker时间显示
      this.showNow = true;
    },
    onCancel() {
      //取消隐藏
      this.showNow = false;
    },
    onConfirm(value) {
      let day = value.getDate() > 9 ? value.getDate() : "0" + value.getDate();
      this.timeShow =
        value.getFullYear() +
        "-" +
        (value.getMonth() > 9
          ? value.getMonth() + 1
          : "0" + (value.getMonth() + 1)) +
        "-" +
        day;
      this.onCancel();
    },
    areaLook() {
      this.areaPs = true;
    },
    areaHide() {
      this.areaPs = false;
    },
    areaSure(value) {
      let that = this;
      value.map(function(val) {
        that.areaShow += " " + val.name;
      });
      this.areaHide();
    }
  }
};
</script>
<style scoped>
@import "../assets/css/information.css";
.van-picker {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
}
.backdrop {
  position: fixed;
  z-index: 998;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

