import {
  reqMsiteNav,
  reqFocusList,
  reqKingkongList,
  reqCategoryList,
} from '../api'

import {
  RECEIVE_MSITE_NAV,
  RECEIVE_FOCUS_LIST,
  RECEIVE_KING_KONG,
  RECEIVE_CATEGORY_LIST,
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
  },
}
export default actions
