/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax';
// const BASE = 'http://localhost:5000'
//const BASE = '/api'

export const  reqMsiteNav=()=> ajax('/navigation')//导航
export const reqFocusList=()=> ajax('/focus')//轮播图
export const reqKingkongList=()=> ajax('/kingkong') //商品 轮播图下面

export const reqCategoryList = ()=> ajax('/category') //第二页 所有数据



