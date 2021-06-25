import React, { createContext } from 'react';
import { Products } from "../components/ProductJson";

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    return (
        <>
            <ProductContext.Provider value={
               {products: [...Products]}
            }>
               {props.children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider;
