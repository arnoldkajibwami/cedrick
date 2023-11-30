import React, { useEffect, useState } from "react";
import ServiceContainer from "./ServiceContainer";
import ReactTyped from "react-typed";
import WhatsappPop from "./WhatsappPop";
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutContent from "./Aboutcontent";
import Image1 from "./images/14.jpg"
import Image2 from "./images/4.jpg"
import Image3 from "./images/1.jpg"
// import Image5 from "./images/bg2.jpg"

export default function Home() {

    const [index, setIndex] =useState(0)
    const images = [Image1,Image2,Image3]

    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            setIndex((index + 1)%images.length);
        }, 4000)
        
    },[index]);
    return (
        <>
            <WhatsappPop />
            <section className=" slider_section" style={{backgroundImage:`url(${images[index]})`}}>
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-md-6" >
                            <div className="detail_box ">
                                <h1 >
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
                                <a href="contact" style={{ textDecoration: "none"}}>
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