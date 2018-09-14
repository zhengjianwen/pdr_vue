import Vue from 'vue'
import Router from 'vue-router'
// 首页
import IndexA from '@/components/index'
// 搜索
import Search from '@/components/search'
// 个人中心
import Member from '@/components/member'
// 设置个人中心
import SetInfo from '@/components/setInfo'
// 登录页面
import Login from '@/components/login'
// 发布帖子
import UpInfo from '@/components/upInfo'
// 详情
import Detail from '@/components/detail'
// 基本信息
import Information from '@/components/information'
// 我的作品
import Mypost from '@/components/member/myPost'
// 我的点评
import Comments from '@/components/member/comment'
// 我的喜欢
import MyLike from '@/components/member/myLike'
// 关注
import Look from '@/components/member/look'
// 粉丝
import Fans from '@/components/member/fans'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexA
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/upInfo',
      name: 'upInfo',
      component: UpInfo
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/setInfo',
      name: 'setInfo',
      component: SetInfo
    },
    {
      path: '/myPost',
      name: 'myPost',
      component: Mypost
    },
    {
      path: '/comments',
      name: 'comment',
      component: Comments,
    },
    {
      path: '/myLike',
      name: 'myLike',
      component: MyLike
    },
    {
      path: '/look',
      name: 'look',
      component: Look
    },
    {
      path: '/fans',
      name: 'fans',
      component: Fans
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
  ]
})
