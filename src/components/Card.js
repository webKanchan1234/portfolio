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
        
            <div className="col-md-3 col-12 mx-auto">
                <div className="card">
                
                     <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/> 
                        <div className="card-body">
                           <h5 className="text-center font-weight-bold mt-2">{props.title}</h5>
                             <p className="card-text bold-300 text-center ">{props.text} </p>
                             
                                <a href={props.src} className="btn btn-primary btnchek ">Check</a>
                        </div>
                </div>
            </div>                             
        </>
    );
};
export default Card;