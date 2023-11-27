import React from "react";
import "./service.css"
import Image1 from "./images/plug.png"
import Image2 from "./images/7.png"
import Image3 from "./images/1.png"
// import Image3 from "./images/2.png"
import Image4 from "./images/4.png"
import Image5 from "./images/14.png"
import Image6 from "./images/11.png"
import Image7 from "./images/10.png"
import Image8 from "./images/12.png"
import Image9 from "./images/3.png"

export default function ServiceContainer() {
    return (
        <>
            <section className="service_section">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Services
                        </h2>
                        <img src={Image1} alt="" />
                    </div>

                    <div className="service_container">
                        <div className="box">
                            <div className="img-box">
                                <img src={Image2} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    La Geologie et Genie Minier
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box active">
                            <div className="img-box">
                                <img src={Image3} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    La construction (Genie Civile)
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={Image4} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Electromecanique
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box ">
                            <div className="img-box">
                                <img src={Image5} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Electricite Industrielle
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={Image6} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Chimie-metallurgie
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={Image7} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Protection de L'environement
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={Image8} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Developpement Communautaire
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={Image9} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Clinique Juridique
                                </h5>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <a href="">
                            Read More
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
}