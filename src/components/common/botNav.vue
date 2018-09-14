<template>
     <div class="botNav">
         <router-link to="/">
             <span class="home">HOME</span>
         </router-link>
         <router-link to="/upInfo">
             <span class="jia">+</span>
         </router-link>
         <router-link to="member">
             <span class="me">ME</span>
         </router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style>
/* 底部 */
.botNav{
    height: 0.8rem;
    line-height: 0.8rem;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    padding:0.04rem 0.6rem;
    -webkit-box-shadow: 0 1px 6px #ccc;
    box-shadow: 0 1px 6px #ccc;
}
.botNav span{color:#000;font-size: 0.32rem;width: 33.3%;display: block;float: left;text-align: center;}
.botNav .jia{color:#ff502f;font-size: 0.56rem;}
</style>
