import React, { useEffect, useState } from "react";
import ServiceContainer from "./ServiceContainer";
import ReactTyped from "react-typed";
import WhatsappPop from "./WhatsappPop";
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutContent from "./Aboutcontent";
import Contactcontent from "./Contactcontent"
import Image1 from "./images/14.jpg"
import Image2 from "./images/16.png"
import Image3 from "./images/17.png"


export default function Home() {

    const text1 = "La RDC est un pays dont le sol et sous-sol regorgent des richesses qualifiées sous plusieurs cieux de scandale géologique.Au lieu d'etre une benediction, ces richesses minieres ont même été par moment et par endroit qualifiées de maledction pour et parles populations qui devraient être bénéficiaires."
    const text2 = "C'est pour farie face à cette contradiction qu'un groupe d'intellectuels et cadres mutisectoriels (ingenieurs des Mines, Geologues, Metallurgistes, Professeurs d'universites, Managers,...)"
    const text3 = "conscients de leur responsabilité individuelle dans l'accomplissement du bien être collectif et fortement motivés par les multiples secteur minier decident de joindre leurs efforts et de se constituer en association afin de mener des actions concertées pour que le secteur minier procure le maximum, de possibilité de developpement dans notre pays en Général et au Sud-Kivu en particulier."

    const [index, setIndex] = useState(0)
    const images = [Image1, Image2, Image3]
    const Textbg = [text1, text2, text3]

    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % images.length);
        }, 6000)

    }, [index]);
    return (
        <>

            <WhatsappPop />
            <section className=" slider_section" style={{ backgroundImage: `url(${images[index]})` }}>
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-md-6" >
                            <div className="detail_box">
                                <h1 className="">
                                    <span>Bienvenue chez</span>{" "}<br />
                                    <h5>
                                        <ReactTyped strings={["Bureau D'etude et execution des projets miniers"]} typeSpeed={70} loop />
                                    </h5>
                                </h1>
                                <p className="mt-4">
                                    {Textbg[index]}
                                </p>
                                <a href="contact" style={{ textDecoration: "none" }}>
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

            <div className="mt-5">
                <Contactcontent />
            </div>
        </>
    );
}