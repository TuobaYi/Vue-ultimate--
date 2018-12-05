import Msite from '../pages/Msite/Msite'
import Category from '../pages/Category/Category'
import ShopCart from '../pages/ShopCart/ShopCart'
import Shiwu from '../pages/Shiwu/Shiwu'
import Personage from '../pages/Personage/Personage'
const routes=[
  {path:'/msite',component:Msite},
  {path:'/category',component:Category},
  {path:'/shiwu',component:Shiwu},
  {path:'/shop-cart',component:ShopCart},
  {path:'/personage',component:Personage},
  {path:'/',redirect:'/msite'}
]
export default routes
