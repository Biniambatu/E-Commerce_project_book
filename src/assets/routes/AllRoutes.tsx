import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage ,ProductList } from '../pages'


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/products' element={<ProductList/>}></Route>
        </Routes>
    </div>
  )
}
