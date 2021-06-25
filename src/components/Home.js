import React from 'react'
import Coverimg from "../images/cover.jpg";
import Carosel1 from "../images/corusel1.jpg";
import Carosel2 from "../images/corusel2.jpg";
import Carosel3 from "../images/corusel3.jpg";
import Cover2 from "../images/main-cover2.jpg";
import "../App.css";
const Home = () => {
    return (
        <>
            <div className="main-home-section">
                <div className="main-home">

                    <img src={Coverimg} alt="cover" className="img-fluid" />

                </div>
                <div className="sec-one">
                    <h2> Quality Food </h2>
                    <h3> -  Since 2000  -</h3>
                </div>
                <div className="main-carosel">
                    <div className="container">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Carosel1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Carosel2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Carosel3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sec-one">
                    <h2> We Speak </h2>
                    <h3> -  KARACHIITE  -</h3>
                </div>
                <div>
                    <img src={Cover2} alt="cover" className="img-fluid" />

                </div>
            </div>
        </>
    )
}

export default Home
