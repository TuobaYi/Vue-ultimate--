import {
  RECEIVE_MSITE_NAV,
  RECEIVE_FOCUS_LIST,
  RECEIVE_KING_KONG,
  RECEIVE_CATEGORY_LIST,
} from './mutations-type'

const mutations={
  [RECEIVE_MSITE_NAV](state,{data}){
    state.MsiteNav=data
  },//导航
  [RECEIVE_FOCUS_LIST](store,{focusList}){
    store.focusList=focusList
  },//首页轮播图
  [RECEIVE_KING_KONG](store,{kingKongList}){
    store.kingKongList=kingKongList
  },// shop 轮播图下
  [RECEIVE_CATEGORY_LIST](store,categoryList){
    store.categoryList=categoryList
  }
}
export default mutations
