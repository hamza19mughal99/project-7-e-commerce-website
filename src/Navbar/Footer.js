import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/Logo.png";
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../App.css";

const Footer = () => {
    return (
        <>
            {/* <div className=""> */}
            <div className="main-footer container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-logo">
                            <h3>ZingerLover</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <h3>INFORMATION</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                            <li>Careers</li>
                            <li>Contact Us</li>

                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <h3>CONTACT US</h3>
                        <ul>
                            <li>+92 3492496204</li>
                            <li>hamza19mughal99@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <h3>FOLLOW US</h3>
                        <div className="social-media">
                            <div>    <Link to="/">      <FaFacebookF className="face" /> </Link> </div>
                            <div>    <Link to="/">     <FaInstagram className="face" /> </Link>  </div>
                            <div>    <Link to="/">     <FaLinkedin className="face" /> </Link>   </div>

                        </div>
                    </div>
                </div>
                <div className="footer-credit">
                <p>    Hamza Ahmed Mughal | <img src={logo} width="25px" alt="logo" /> </p>
            </div>
            </div>
            

        </>
    )
}

export default Footer
