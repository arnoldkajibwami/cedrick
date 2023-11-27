import React from "react";
import Image2 from "./images/8.png"
import Image3 from "./images/17.png"
import Image4 from "./images/plug.png"
import "./about.css"

export default function About() {
    return (
        <>
            <section className="about_section layout_padding ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Us
                                    </h2>
                                    <img src={Image4} alt="plug"/>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit
                                </p>
                                <a href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="img_container">
                                <div className="img-box b1">
                                   <img src={Image2} alt="" />
                                </div>
                                <div className="img-box b2">
                                   <img src={Image3} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}