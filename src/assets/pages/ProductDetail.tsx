import React, { useEffect, useState } from 'react'
import { Rating } from '../components/Elements/Rating'
import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../store/cartSlice';

const ProductDetail = () => {
    const cartList = useSelector(state => state.cartState.cartList)
    const [product, setProduct] = useState({});
    const dispatch = useDispatch()
    const {id} = useParams()
    useTitle(product.name)
    const [isInCart, setIsInCart] = useState(false)
    useEffect(()=>{
        async function fetchProduct() {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            const data = await response.json();
            setProduct(data)
        }
        fetchProduct()
    },[])
    useEffect(() => {
      const isProductInCart = cartList.find(item => item.id === id)
      if(isProductInCart){
          setIsInCart(true)
      }else{
          setIsInCart(false)
      }
    },[cartList,id])
  return (
    <main>
    <section> 
      <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
      {/* <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p> */}
      <div className="flex flex-wrap justify-around">
        <div className="max-w-xl my-3">
          <img className="rounded" src={product.poster} alt='product.name' />
        </div>
        <div className="max-w-xl my-3">
          <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
            <span className="mr-1">$</span>
            <span className="">{product.price}</span>
          </p>
          <p className="my-3"> 
            <span>
              {/* <Rating rating={product.rating} /> */}
            </span>
          </p>
          <p className="my-4 select-none">
            {product.best_seller? (<span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>):(<span ></span>)  } 
            {product.in_stock? (<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">IN STOCK</span> ):(<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>) }
            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
          </p>
          <p className="my-3">
            <span>
                <Rating rating={product.rating}/>
            </span> 
          </p>
          {isInCart? (<button className='inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800' onClick={() => dispatch(remove_from_cart(product)) } > Remove <i className="ml-1 bi bi-plus-lg"></i></button>):(<button className='inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800' onClick={() => dispatch(add_to_cart(product)) } >Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>)}
          <p className="text-lg text-gray-900 dark:text-slate-200">
            {product.long_description}
          </p>
        </div>
      </div>
    </section>
  </main> 
  )
}

export default ProductDetail