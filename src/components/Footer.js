import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="container-fluid mt-5 foot bg-dark">
                <div className="row">
                    <div className="col-md-3 col-10 mx-auto ">
                        <div className="addr">
                            <h3 className="text-white mt-2">Bhagalpur college of engineering</h3>
                            <p className="text-white ">Sabour Bhagalpur <br/>
                            <span className="text-white ">Mob. +916203663044</span></p>
                        </div>
                    </div>
                    <div className="col-md-3 col-10 mx-auto mt-3">
                        <div className="serv">
                            <a href="">Home</a> 
                            <a href="">About</a> <br/>
                            <a href="">Services</a> 
                            <a href="">Portfolio</a> <br/>
                            <a href="">Conract us</a> 
                            <a href="">Work</a>
                        </div>
                    </div>
                    <div className="col-md-3 col-10 mx-auto ">
                        <div className="follow mt-3">
                        <a href=""> <i href="" class="fab fa-facebook-square"></i></a>
                        <a href="https://twitter.com/kanchan78980649"><i href="" class="fab fa-twitter-square"></i></a>
                        <a href="https://www.linkedin.com/in/kanchan-kumar-bb9346197/"> <i href="" class="fab fa-linkedin"></i> </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Footer;
