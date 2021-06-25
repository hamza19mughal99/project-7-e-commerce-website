import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Findus from "../components/Findus";
import Cart from "../components/Cart";
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
import ProductContextProvider from "../Global/ProductContext";
import CartContextProvider from "../Global/CartContext";

const RouteConfig = () => {
    return (
        <>
            <ProductContextProvider>
                <CartContextProvider>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/Menu" component={Menu} />
                            <Route exact path="/Findus" component={Findus} />
                            <Route exact path="/Cart" component={Cart} />
                        </Switch>
                        <Footer />
                    </Router>
                </CartContextProvider>
            </ProductContextProvider>
        </>
    )
}

export default RouteConfig
