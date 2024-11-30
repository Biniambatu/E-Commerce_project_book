
import { Route, Routes } from 'react-router-dom'
import { HomePage ,ProductList } from '../pages'
import ProductDetail from '../pages/ProductDetail'
import { CartPage } from '../pages/Cart/CartPage'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/products' element={<ProductList/>}></Route>
            <Route path='/products/:id' element={<ProductDetail/>}></Route>
            <Route path='/cart' element={<CartPage/>} />
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}
