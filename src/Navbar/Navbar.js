import React, { useContext } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { CartContext } from '../Global/CartContext';
import "../App.css";

const Navbar = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <>
            {/* <div className=""> */}
            <nav className=" container navbar navbar-expand-lg navbar-light">
                
                    <Link className="navbar-brand" to="/">ZingerLover</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Menu">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Findus">Find Us</Link>
                            </li>
                        </ul>
                        <div className='add-to-cart d-flex'>
                            <Link to="/Cart" className="cart">  <FaShoppingCart /> </Link>
                            <span> {totalQuantity} </span>
                        </div>
                    </div>
                
            </nav>
            {/* </div> */}
        </>
    )
}

export default Navbar
