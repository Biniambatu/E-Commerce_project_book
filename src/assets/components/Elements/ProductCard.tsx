 
import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import StarIcon from '@mui/icons-material/Star';
import { add_to_cart, remove_from_cart } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const ProductCard = ({product}:any) => {
    const cartList = useSelector(state => state.cartState.cartList)
    const [isInCart, setIsInCart] = useState(false)
    const { id, name, overview, long_description, price, poster, rating, in_stock, size, best_seller }= product;
    const dispatch = useDispatch()
    
    useEffect(()=>{
      const isProductInCart = cartList.find((item) => item.id === id)
      if(isProductInCart){
         setIsInCart(true)
      }else{
         setIsInCart(false)
      }
    },[id, cartList])
   
   return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${id}`} className="relative" >
            {best_seller ?(<span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">best_seller</span>) : (<span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded"></span>)} 
            <img className="rounded-t-lg w-full h-64" src={poster} alt='' />
        </Link>
        <div className="p-5" >
            <Link to={`/products/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            <div className="flex items-center my-2">
            <Rating rating={rating} />
            </div>
            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
                {isInCart ? (<button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ' onClick={() => dispatch(remove_from_cart(product))}>Remove</button>) : (<button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800' onClick={() => dispatch(add_to_cart(product))}>Add To Cart </button> )}
            </p>
        </div>
    </div>
  );
};
