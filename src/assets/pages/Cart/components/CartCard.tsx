import React from 'react'
import { Link } from 'react-router-dom';
import { remove_from_cart } from '../../../../store/cartSlice';
import { useDispatch } from 'react-redux';

export const CartCard = ({product}) => {
   const {id, name, image, price, poster, overview} = product;
   const dispatch = useDispatch()
  return (
    <>
          <div className="flex m-3 mx-auto w-10/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/products/${id}`} className="relative flex-shrink-0 w-1/4">
              <img className="rounded-l-lg w-full h-full object-cover" src={poster} alt="" />
            </Link>
            <div className="flex flex-col justify-between p-4 w-3/4">
              <Link to={`/products/${id}`}>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{name}</h5>
              </Link>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-sm line-clamp-2 mt-2">{overview}</p>
              <div className="flex items-center mt-2">
                {/* Add rating logic here if needed */}
              </div>
              <p className="text-xl font-semibold dark:text-gray-200 mt-2 flex justify-between items-center">
                <span>
                  <span>$</span>
                  <span>{price}</span>
                </span>
                <button 
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
                  onClick={() => dispatch(remove_from_cart(product))}
                >
                  Remove
                </button>
              </p>
            </div>
          </div>

          </>
   
  )
}
