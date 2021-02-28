import React from 'react'

const Skills = () => {
    return (
        <>
            <div className="my-5" id="skill">
                <h1 className="text-center">Professional Skills</h1>
            </div>
            <div className="container skillbox gy-4">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="skl">
                            <h2 className="">Html</h2>
                            <h5 className="mt-1">80%</h5>
                        </div>
                        <div className="skills_html"></div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="skl">
                            <h2 className="">Css</h2>
                            <h5 className="mt-1">70%</h5>
                        </div>
                        <div className="skills_css"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="skl">
                            <h2 className="">Javascript</h2>
                            <h5 className="mt-1">60%</h5>
                        </div>
                        <div className="skills_js"></div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="skl">
                            <h2 className="">Php</h2>
                            <h5 className="mt-1">80%</h5>
                        </div>
                        <div className="skills_php"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="skl">
                            <h2 className="">React</h2>
                            <h5 className="mt-1">65%</h5>
                        </div>
                        <div className="skills_react"></div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="skl">
                            <h2 className="">Mysql</h2>
                            <h5 className="mt-1">75%</h5>
                        </div>
                        <div className="skills_sql"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;
