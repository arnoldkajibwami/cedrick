import React, { useEffect } from "react";
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
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="detail_box ">
                                <h1>
                                    <span>Bienvenue chez</span>{" "}<br />
                                    <ReactTyped strings={["B.E.E.M.P. Asbl"]} typeSpeed={70} loop />
                                </h1>
                                <p >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                                <a href="/contact" style={{ textDecoration: "none" }}>
                                    Contact Nous
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className="mt-5">
                <ServiceContainer />
            </div>

            <div className="mt-5 abouthomediv">
                <AboutContent />
            </div>

            <div className="mt-5">
                <Contactcontent />
            </div>
        </>
    );
}