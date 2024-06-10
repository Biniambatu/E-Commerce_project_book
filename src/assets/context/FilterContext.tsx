import { createContext, useContext } from "react"
import { ProductList } from "../pages";

const FilterInitialState = {
    productList : [],
    sortBy : null,
    rating : null,
    bestSeller : false,
    inStock : false
 }

 const FilterContext =  createContext(FilterInitialState);

 export const FilterProvider = ({children}) => {
   
    const value = {
        ProductList : [1,2,3]
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
