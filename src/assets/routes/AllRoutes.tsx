
import { Route, Routes } from 'react-router-dom'
import { HomePage ,ProductList } from '../pages'
import ProductDetail from '../pages/ProductDetail'
import { CartPage } from '../pages/Cart/CartPage'


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/products' element={<ProductList/>}></Route>
            <Route path='/products/:id' element={<ProductDetail/>}></Route>
            <Route path='/cart' element={<CartPage/>} />
        </Routes>
    </div>
  )
}
