<template>
    <div class="login">
        <headerNav titles="登录"></headerNav>
        <div class="content">
            <h4>欢迎进入评大人</h4>
            <div class="formA">
                <form id="loginForm">
                    <van-row class="moblie">
                        <input type="tel" autocomplete="off"  ref="telT" name="key" onkeyup="value=value.replace(/[^\d| ]/g,'')" onafterpaste="this.value=this.value.replace(/[0-9\ ]/g,'')" placeholder="点击输入您的手机号码" maxlength="11" id="tel">
                    </van-row>
                    <van-row class="smscode">
                        <input type="tel" placeholder="点击输入验证码" id="smsCodeP">
                        <button type="button" id="getSms" @click="getSms" :disabled="show" >{{btntext}}</button>
                    </van-row>
                </form>
            </div>
            <div class="sureBtn">
                <van-button size="large">登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from "@/components/common/header";
export default {
  name: "login",
  components: {
    headerNav
  },
  methods: {
    getSms() {
      let telnum = this.$refs.telT.value;
      if (telnum.length == 11) {
        if (/^[0-9]*$/.test(telnum)) {
          //存储手机号
          this.telPhone = telnum;
          // 校验完毕后返回token
          this.token(telnum).then(res => {
            this.tokenKey = res;
            this.cookieKey = this.cookie.getCookie('pdr_token')
            //获取token成功后获取短信验证码
            this.axios
              .post("/login/vc?phone=" +this.telPhone +"&" +"token=" +this.tokenKey+"&cookie="+this.cookieKey)
              .then(res => {
                if (res.data.code == 200) {
                } else {
                  this.$dialog.alert({
                    title: "提示",
                    message: res.data.msg
                  });
                }
              })
              .catch(err => {
                this.$dialog.alert({
                  title: "提示",
                  message: err
                });
              });
          });
        }
      }
      // 当手机号为11位时候进行正则校验
      let num = 60;
      let timer = setInterval(() => {
        this.btntext = num-- + "秒重试";
        this.show = true;
        if (num == 0) {
          clearInterval(timer);
          this.btntext = "获取验证码";
          this.show = false;
        }
      }, 1000);
    }
  },
  data() {
    return {
      //按钮disable
      show: false,
      btntext: "获取验证码",
      tokenKey: "",
      telPhone: "",
      code: "",
      cookieKey:''//cookie
    };
  }
};
</script>

<style scoped>
.van-nav-bar {
  background: #f4f0f1 !important;
  -webkit-box-shadow: 0 1px 6px #ccc;
  box-shadow: 0 1px 6px #ccc;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.login {
  height: 100%;
}
/*input提示*/
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #e0e0e0;
  font-size: 0.3rem;
  font-family: "Microsoft YaHei";
}
/* 内容 */
.content {
  width: 100%;
  background: #fff;
  padding: 0.52rem 0.48rem;
  padding-top: 1.4rem;
  height: 100%;
  position: relative;
}
.content h4 {
  font-size: 0.4rem;
  margin-bottom: 0.9rem;
}
#tel,
#smsCodeP {
  color: #d0c9c9;
  font-size: 0.3rem;
  border: none;
  margin-bottom: 0;
  padding: 10px 0 2px;
}
#loginForm .van-row {
  border-bottom: 1px solid #d2d2d2;
}
#loginForm .van-row:nth-child(2) {
  margin-top: 0.76rem;
}
#smsCodeP {
  width: 70%;
  display: inline-block;
}
#getSms {
  width: 28%;
  height: 0.55rem;
  line-height: 0.55rem;
  padding: 0;
  vertical-align: middle;
  color: #333;
  background-color: #fff;
  position: relative;
  display: inline-block;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: center;
  -webkit-appearance: none;
  border: 1px solid #4e4e4e;
}
/* 确定 */
.sureBtn {
  height: 0.76rem;
  width: 100%;
}
.sureBtn button {
  height: 100%;
  line-height: 0.05rem;
  color: #fff;
  background: #ff502f;
  font-size: 0.36rem;
  border-radius: 20px;
  top: 3.1rem;
}
</style>

