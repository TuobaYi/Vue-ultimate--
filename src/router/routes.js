import Msite from '../pages/Msite/Msite'
import Category from '../pages/Category/Category'
import ShopCart from '../pages/ShopCart/ShopCart'
import Shiwu from '../pages/Shiwu/Shiwu'
import Personage from '../pages/Personage/Personage'
import Login from '../pages/Login/Login'
import Search from '../pages/Search/Search'
const routes=[
  {path:'/msite',component:Msite},
  {path:'/category',component:Category},
  {path:'/shiwu',component:Shiwu},
  {path:'/shop-cart',component:ShopCart},
  {path:'/personage',component:Personage},
  {path:'/login',component:Login},
  {path:'/search',component:Search},
  {path:'/',redirect:'/msite'}
]
export default routes
