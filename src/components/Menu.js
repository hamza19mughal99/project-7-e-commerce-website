import React, { useContext} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ProductContext } from '../Global/ProductContext';
import { CartContext } from '../Global/CartContext';
import "../App.css";

const Menu = () => {
    const {products} = useContext(ProductContext);
    const {dispatch} = useContext(CartContext)
    return (
        <>
            <div className="main-menu">
                {
                    products.map((product) => {
                        const {id , image , name , price } = product;
                        return (

                            <div key={id} className="card" style={{width: "18rem"}}>
                                <img src={image} className="card-img-top" alt={name} />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text"> Rs {price} /- </p>
                                    <div className="btn"
                                    onClick={()=> dispatch({
                                        type: 'ADD_TO_CART',
                                        id: product.id ,
                                        product
                                    })}
                                    > Add to Cart <FaShoppingCart/> </div>
                                </div>
                            </div>

                        )
                    })
                }


            </div>
        </>
    )
}

export default Menu;
