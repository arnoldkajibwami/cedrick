import React, { useEffect } from "react";
import Image1 from "./images/16.png"
import Image2 from "./images/17.png"
import Image3 from "./images/8.png"
import Carousel from 'react-bootstrap/Carousel';
import ServiceContainer from "./ServiceContainer";
import Contactcontent from "./Contactcontent";
import ReactTyped from "react-typed";
import WhatsappPop from "./WhatsappPop";
import AOS from 'aos'
import 'aos/dist/aos.css'

import AboutContent from "./Aboutcontent";

export default function Home() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <WhatsappPop />
            <section className=" slider_section">
                <div className="container" style={{ marginTop: "120px" }}>
                    <div className="row">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div fadeIn className="detail_box ">
                                <h1>
                                    <span>Bienvenue chez</span>{" "}<br />
                                    <ReactTyped strings={["B.E.E.M.P Asbl"]} typeSpeed={50} loop />
                                </h1>
                                <p >
                                    It is a long established fact that a reader will be distracted by the readable content of
                                    a page when looking at its layout. The point of using Lorem
                                </p>
                                <a href="/contact" style={{ textDecoration: "none" }}>
                                    Contact Nous
                                </a>
                            </div>
                        </div>
                        {/* <div className="col-lg-5 col-md-6 offset-lg-1 " data-aos="zoom-in">
                            <div className="img_content">
                                <div className="img_container">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <Carousel className="carousel-inner">
                                            <Carousel.Item fade className="carousel-item active">
                                                <div className="img-box">
                                                    <img src={Image1} alt="" />
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item fade className="carousel-item">
                                                <div className="img-box">
                                                    <img src={Image2} alt="" />
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item fade className="carousel-item">
                                                <div className="img-box">
                                                    <img src={Image3} alt="" />
                                                </div>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </section >


            <div classNameName="mt-5">
                <ServiceContainer />
            </div>

            <div classNameName="mt-5">
                <AboutContent />
            </div>

            <div classNameName="mt-5">
                <Contactcontent />
            </div>
        </>
    );
}