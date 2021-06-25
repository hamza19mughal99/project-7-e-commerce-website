import React from 'react'
import "../App.css";

const Findus = () => {
    return (
        <>
            <div className="sec-one">
                <h2> Send Us </h2>
                <h3> -  a Message -</h3>
            </div>
            <div className="main-find container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-1 my-20 ">

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your Full Name" autoComplete="off" required
                                id="username" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter your Email Address " id="email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter your Phone Number" id="number" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="4" placeholder="Enter your reviews or any query" required
                                id="comment"></textarea>
                        </div>

                        <div className="d-flex justify-content-center mb-5">
                            <button type="submit" className="btn-submit" >Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Findus
