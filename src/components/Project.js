import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Sdata from "./Sdata";
import Card from "./Card";
const breakPoints = [
    {width:1, itemsToShow: 1},
    {width:550, itemsToShow: 2},
    {width:768, itemsToShow: 3},
    {width:1200, itemsToShow: 4},
];
const Project = (props) => {
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center">Carousel</h1>
            </div>
            <div className="carousel">
                <Carousel breakPoints={breakPoints}>
                
            
                </Carousel>
            </div>
            
        </>
    )
}

export default Project;
