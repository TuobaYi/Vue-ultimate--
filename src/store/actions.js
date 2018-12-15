import {
  reqMsiteNav,
  reqFocusList,
  reqKingkongList,
  reqCategoryList,
  reqRecommend,
  reqShiwuNav,
  reqDaRen,
  reqUser,
  reqSearchInit,
  reqSearchResult
} from '../api'

import {
  RECEIVE_MSITE_NAV,
  RECEIVE_FOCUS_LIST,
  RECEIVE_KING_KONG,
  RECEIVE_CATEGORY_LIST,
  RECEIVE_SHIWU,
  RECEIVE_SHIWU_NAV,
  RECEIVE_USER,
  RECEIVE_SEARCH_INIT,
  RECEIVE_SEARCH_RESULT
} from './mutations-type'
const actions={
  async getMsiteNav(store){
    //异步获取
    const result =await reqMsiteNav()
    if (result.code === 0) {
      const data=result.data
      store.commit(RECEIVE_MSITE_NAV,{data})
    }
  },//获取头部导航,更新 状态数据
  async getfocusList(store){
    //请求
    const result= await reqFocusList()
    if (result.code === 0) {
      const focusList = result.data
      store.commit(RECEIVE_FOCUS_LIST,{focusList})
    }
  },//轮播图
  async getKingkongList({commit}){
    //异步
    const result = await reqKingkongList()
    if (result.code===0){
      let kingKongList = result.data
        commit(RECEIVE_KING_KONG,{kingKongList})
    }
  },//shop 轮播图下

  async getCategoryList({commit}){
    //异步
    const result = await reqCategoryList()
    if (result.code === 0) {
      const categoryList=result.data

      commit(RECEIVE_CATEGORY_LIST,categoryList)
    }
  }, //第二页

  async getRecommend(store){ //推荐 数据
    //异步
    const result=await reqRecommend()
    if (result.code === '200') {
      const data=[]
      const dataYS=result.data//原始数据
          dataYS.map((item,index)=>{
            let xinXi=item.topics[0]
            let ad = item.ad
            xinXi.ad=ad
            data.push(xinXi)
          })
      store.commit(RECEIVE_SHIWU,{shiwu:data})
    }
  },//第三页 推荐

  async getDaRen(store){       //   达人 数据
    //异步
    const result=await reqDaRen()
    if (result.code === '200') {
      const data=result.data.result
      store.commit(RECEIVE_SHIWU,{shiwu:data})
    }
  },//第三页 推荐

  async getShiwuNav(store){
    //异步
    const result = await reqShiwuNav()
    if (result.code === '200') {
      const data=result.data

      store.commit(RECEIVE_SHIWU_NAV,data)
    }
  },// 第三页 导航

  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },//更新user数据
  async logout({commit}){
    const result = await reqLogout()
    if (result.code === 0) {
      let user={}
      commit(RECEIVE_USER, {user})
    }
  },//登出
  async getUser({commit}){
    const result = await reqUser()
    if (result.code === 0) {
      let user =result.data
      commit(RECEIVE_USER, {user})
    }
  },//自动登录

  async getSearchInit({commit}){ //搜索  初始化数据
    const result= await reqSearchInit()
    console.log(result)
    if (result.code === '200') {
      const {data} = result
      commit(RECEIVE_SEARCH_INIT,data)
    }
  }, //搜索 初始数据
  async getSearchResult({commit}, {keywordPrefix}){ // 搜索 内容
    const result = await reqSearchResult({keywordPrefix})
    if (result.code === '200') {
      const {data} = result
      commit(RECEIVE_SEARCH_RESULT,data)
    }
  },
  resetSearchResult({commit}){
    let data=[]
    commit(RECEIVE_SEARCH_RESULT,data)
  }
}
export default actions
