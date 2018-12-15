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

const mutations={
  [RECEIVE_MSITE_NAV](state,{data}){
    state.MsiteNav=data
  },//导航
  [RECEIVE_FOCUS_LIST](state,{focusList}){
    state.focusList=focusList
  },//首页轮播图
  [RECEIVE_KING_KONG](state,{kingKongList}){
    state.kingKongList=kingKongList
  },// shop 轮播图下
  [RECEIVE_CATEGORY_LIST](state,categoryList){
    state.categoryList=categoryList
  },//忘了
  [RECEIVE_SHIWU](state,{shiwu}){
    state.shiwu= shiwu
  },//第三页 当前 列表数据
  [RECEIVE_SHIWU_NAV](state,data){
    state.shiwuNav=data
  },

  [RECEIVE_USER](state,{user}){
    state.user=user
  },
[RECEIVE_SEARCH_INIT](state,data){
  state.searchInitList=data
},
[RECEIVE_SEARCH_RESULT](state,data){
    state.searchResult=data
}
}
export default mutations
