
//mock 只需要执行一遍就行
import msite from './msite.json'
import shiwu from './shiwu.json'
import category from './category.json'  //第二页 分类 数据 []

import Mock from 'mockjs'

const {cateList,focusList,kingKongModule} = msite //主页数据 头部导航条
const kingKongList=kingKongModule.kingKongList//轮播图下面商品
const {} = shiwu

Mock.mock('/navigation',{code:0,data:cateList}) //主页 头部导航条
Mock.mock('/focus',{code: 0,data:focusList})//主页 轮播图
Mock.mock('/kingkong',{code:0,data:kingKongList})//展示 轮播图下 商品
Mock.mock('/category',{code:0,data:category}) //category  分类
