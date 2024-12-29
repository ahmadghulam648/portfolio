import React from "react";
import "../../assets/css/index.css";
import port from '../../assets/image/port2.png'

export default function Portfolio() {
    return (
        <div className="container-fluides">
            <div className="col-con">
                <span> ______ Hello ______</span>
                <h1>I'm <span>Ghulam</span> Ahmad</h1>
                <h3>Expert In Web Designer <br/> & Development</h3>
                <p>A web designer is a professional responsible for creating and designing the layout, structure, and visual appearance of websites.</p>
                <div className="icons">

                </div>
            </div>
            <div className="col-img">
                <img src={port} alt="" />
            </div>
        </div>
    );
}
