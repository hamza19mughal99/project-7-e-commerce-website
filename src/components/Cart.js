import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { CartContext } from '../Global/CartContext';
import "../App.css";


const Cart = () => {

    const { shoppingCart, totalAmount, dispatch } = useContext(CartContext)
    return (
        <>
            <div className="sec-one">
                <h3> Place your Order </h3>
            </div>
            <div className="container-fluid">
                <div className="main-section " style={{ margin: "0 10px" }} >

                    <div className="row">

                        <div className="col-lg-8 col-md-12 col-sm-12 col-12 ind-cart">

                            <div className="section-heading">
                                <p>Your Order</p>
                                <Link to="/Menu" style={{ textDecoration: "none" }}>    <span className="add-more"> Add More Items</span> </Link>
                            </div>
                            {
                                shoppingCart.length > 0 ?
                                    shoppingCart.map((cart) => (


                                        <div className="cart-items d-flex" key={cart.id}>
                                            <div className="cart-image">
                                                <img src={cart.image} alt={cart.name} />
                                            </div>
                                            <div className="cart-details">
                                                <div className="cart-name">

                                                    <p>  {cart.name} </p>

                                                </div>

                                                <div className="cart-price">
                                                    <p>  Rs {cart.price} /- </p>
                                                </div>

                                                <div className="inc-dec">
                                                    <span className="plus">
                                                        <FaPlus
                                                            onClick={
                                                                () =>
                                                                    dispatch({
                                                                        type: 'INC',
                                                                        id: cart.id,
                                                                        cart
                                                                    })

                                                            }
                                                        />
                                                    </span>
                                                    <span className="quantity">
                                                        {cart.Quantity}
                                                    </span>
                                                    {
                                                        cart.Quantity > 1 ?
                                                            <span className="minus">
                                                                <FaMinus
                                                                    onClick={
                                                                        () =>
                                                                            dispatch({
                                                                                type: 'DRC',
                                                                                id: cart.id,
                                                                                cart
                                                                            })

                                                                    } />
                                                            </span>
                                                            :
                                                            <span className="minus">
                                                                <FaMinus />
                                                            </span>
                                                    }
                                                </div>

                                                <div className="item-total">
                                                    <p>   Rs {cart.price * cart.Quantity} /- </p>

                                                </div>
                                                <div className="delete">

                                                    <FaTrash
                                                        onClick={
                                                            () =>
                                                                dispatch({
                                                                    type: 'TRASH',
                                                                    id: cart.id,
                                                                    cart
                                                                })

                                                        } />
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                    :
                                    <div className="cart-empty">
                                        Your Cart is Empty
                                    </div>

                            }

                            {
                                shoppingCart.length > 0 ? <div className="cart-total">
                                    <p>Total :</p>
                                    <p> Rs {totalAmount} /-</p>
                                </div> : " "
                            }


                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 summary">

                            <div className="summary-heading">
                                <p style={{ color: "#f55539" }}>Order Summary</p>
                            </div>
                            <div className="summary-details">
                                <p>Sub Total</p>
                                <p>Rs.{totalAmount}/-</p>
                            </div>
                            <div className="summary-details">
                                <p>Discount</p>
                                {
                                    totalAmount === 0 ? <p>0%</p> : <p>10%</p>
                                }

                            </div>
                            <div className="summary-details">
                                <p>Delivery Fee</p>
                                <p>Rs.100/-</p>
                            </div>
                            <hr />
                            <div className="summary-details">
                                <p>Total</p>
                                {totalAmount === 0 ? <p> Rs.{totalAmount}/-</p> : <p> Rs.{parseInt([totalAmount - (totalAmount * 0.1)]) + 100}/-</p>
                                }

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart
