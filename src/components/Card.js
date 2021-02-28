import React from "react";

//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
// import Error from "./Error";
// import {Switch, Route, Redirect} from "react-router-dom";
// import Navbar from "./Navbar";

const Card = (props) => {
    return (
        <>
        
            <div className="col-md-3 col-10 mx-auto">
                <div className="card">
                {props.imgsrc}
                     {/* //<img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/> */}
                        <div className="card-body">
                           <h5 className="text-center font-weight-bold">{props.title}</h5>
                             <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>                             
        </>
    );
};
export default Card;