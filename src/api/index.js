/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax';
// const BASE = 'http://localhost:5000'
const BASE = '/api'
const BASE1='/111'
const BASE3='/aaa'

export const  reqMsiteNav=()=> ajax('/navigation')//导航
export const reqFocusList=()=> ajax('/focus')//轮播图
export const reqKingkongList=()=> ajax('/kingkong') //商品 轮播图下面

export const reqCategoryList = ()=> ajax('/category') //第二页 所有数据
//第三页 ,推荐
export const reqRecommend= ()=> ajax(BASE+'/recManual.json')
//    导航
export const reqShiwuNav= ()=> ajax(BASE+'/getTabs.json')
//   达人
export const reqDaRen = ()=> ajax(BASE+'/getTabData.json?page=1&size=5&tabId=4')


//获取短信验证码
export const reqSendCode = (phone) => ajax(BASE1 + '/sendcode', {phone})
//手机登录
export const reqSmsLogin = (phone, code) => ajax(BASE1 + '/login_sms', {phone, code}, 'POST')
//账号登录
export const reqPwdLogin = (name,pwd,captcha) => ajax(BASE1+'/login_pwd', {name, pwd, captcha}, 'POST')
//退出登录
export const reqLogout = () => ajax(BASE1 + '/logout')
//自动登录   根据会话
export const reqUser = () => ajax(BASE1 + '/userinfo')




//搜索页面初始化输入框的占位符
export const reqSearchInit = () =>{
  return ajax(BASE3 + `/xhr/search/init.json`)
}
  //搜索页面输入返回结果
export const reqSearchResult = ({keywordPrefix})=> ajax(BASE3 +`/xhr/search/searchAutoComplete.json`,{keywordPrefix},"POST")






