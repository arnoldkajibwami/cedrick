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
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-md-6" >
                            <div className="detail_box ">
                                <h1 style={{fontFamily: "Rokkitt"}}>
                                    <span>Bienvenue chez</span>{" "}<br />
                                    <ReactTyped strings={["B.E.E.M.P. "]} typeSpeed={70} loop />
                                </h1>
                                <p >
                                    La RDC est un pays dont le sol et sous-sol regorgent des richesses qualifiées sous 
                                    plusieurs cieux de scandale géologique.
                                    Au lieu d'etre une benediction, ces richesses minieres ont même été par 
                                    moment et par endroit qualifiées de maledction pour et parles populations 
                                    qui devraient être bénéficiaires.
                                </p>
                                <a href="/contact" style={{ textDecoration: "none" }}>
                                    Contact Nous
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className="mt-5" >
                <ServiceContainer />
            </div>

            <div className="mt-5 abouthomediv" >
                <AboutContent />
                </div>
 {/*
            <div className="mt-5">
                <Contactcontent />
            </div> */}
        </>
    );
}