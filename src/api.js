/**
 * 集中管理整个应用要用到的所有接口地址：
 *   1. 整个应用用到了哪些接口一目了然
 *   2. 接口地址很可能会发生格式变化，集中起来方便修改
 */

// const prefix = window.__CONFIG__.apiPath
const prefix = 'http://m.pingdaren.cn/api'
export default (config => {
  return Object.keys(config).reduce((copy, name) => {
    copy[name] = `${prefix}${config[name]}`
    return copy
  }, {})
})({
  'token': '/token',

  // 发送验证码
  'sendCode': '/login/vc',

  // 注册或者登陆
  'user': '/login/user',

  'info': '/user/info',
  'list': '/article/list',

  'setInfo': '/user/update'
})
