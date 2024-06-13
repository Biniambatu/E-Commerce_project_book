import { createContext, useContext, useReducer } from "react"
import { ProductList } from "../pages";
import { FilterReducer } from "../reducers/FilterReducer";


const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}
 
 const FilterContext =  createContext(filterInitialState);

 export const FilterProvider = ({children}) => {
   const [state,dispatch]  = useReducer(FilterReducer, filterInitialState)
   
   const initialProductList = (products) => {
    dispatch({
        type: "PRODUCT_LIST",
        payload: {
            products: products
        }
    });
}

   const value = {
        products: state.productList,
        initialProductList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
 }

 export const useFilter = () => {
    const context = useContext(FilterContext);
    return context
 }
