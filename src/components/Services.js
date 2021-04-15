import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
    return (
        <>
        <div className="my-3" id="project">
            <h1 className="text-center">My Projects</h1>
        </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val,ind) =>{
                                    return <Card
                                        key={ind} 
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        text={val.text}
                                        src={val.src}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        
        </>
    );
};
export default Services;