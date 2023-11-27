import React from "react";
import Image1 from "./images/16.png"
import Image2 from "./images/17.png"
import Image3 from "./images/8.png"
import Carousel from 'react-bootstrap/Carousel';
import About from "./about";
import ServiceContainer from "./ServiceContainer";
import Contactcontent from "./Contactcontent";
import ReactTyped from "react-typed";

export default function Home() {
    return (
        <>

            <section class=" slider_section">
                <div class="container" style={{ marginTop: "120px" }}>
                    <div class="row">
                        <div class="col-md-6">
                            <div fadeIn class="detail_box ">
                                <h1 >
                                    Welcome to{" "}<br/>
                                    <ReactTyped strings={["B.E.E.M.P Asble"]} typeSpeed={50} loop />
                                </h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of
                                    a page when looking at its layout. The point of using Lorem
                                </p>
                                <a href="" class="">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6 offset-lg-1 mt-4">
                            <div class="img_content">
                                <div class="img_container mt-1">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <Carousel class="carousel-inner">
                                            <Carousel.Item fade class="carousel-item active">
                                                <div class="img-box">
                                                    <img src={Image1} alt="" />
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item fade class="carousel-item">
                                                <div class="img-box">
                                                    <img src={Image2} alt="" />
                                                </div>
                                            </Carousel.Item>
                                            <Carousel.Item fade class="carousel-item">
                                                <div class="img-box">
                                                    <img src={Image3} alt="" />
                                                </div>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >

            <div className="mt-5">
                <ServiceContainer />
            </div>

            <div className="mt-5">
                <About />
            </div>

            <div className="mt-5">
                <Contactcontent />
            </div>
        </>
    );
}