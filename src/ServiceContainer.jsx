import React, { useEffect } from "react";
import "./service.css"
import Image2 from "./images/7.png"
import Image3 from "./images/1.png"
import Image4 from "./images/4.png"
import Image5 from "./images/14.png"
import Image6 from "./images/11.png"
import Image7 from "./images/10.png"
import Image8 from "./images/12.png"
import Image9 from "./images/3.png"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ServiceContainer() {

    useEffect(() => {
        AOS.init({ duration: 1000000 })
    }, [])

    return (
        <>
            <section className="service_section">
                <div className="container">
                    <div className="heading_container d-flex" data-aos="fade-up">
                        <h2>
                            Our Services
                        </h2>
                    </div>

                    <div className="service_container">
                        <div className="box" data-aos="fade-up">
                            <div className="img-box" >
                                <img data-aos="zoom-in" src={Image2} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    La Geologie et Genie Minier
                                </h5>
                                <p>
                                    Faciliter les parternaires financier dans ses domaines de trouver les minerais recherche
                                </p>
                            </div>
                        </div>
                        <div className="box active" data-aos="fade-up">
                            <div className="img-box" >
                                <img data-aos="zoom-in" src={Image3} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    La construction (Genie Civile)
                                </h5>
                                <p>
                                    Construction des routes, Hopitaux, Ecoles et autres.
                                    pour repondre aux besoins sociaux dans les sites miniers
                                </p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="img-box" >
                                <img data-aos="zoom-in" src={Image4} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Electromecanique
                                </h5>
                                <p>
                                    Fabrication des outils, machines adaptés pour repondre au besoins, à l'exploitation
                                    ,traitement et récuperation de minerais. Afin que les activites minieres soient
                                    economiquement rentable pour tous.
                                </p>
                            </div>
                        </div>
                        <div className="box " data-aos="fade-up">
                            <div className="img-box" >
                                <img data-aos="zoom-in" src={Image5} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Ventes des Appareils
                                </h5>
                                <p>
                                    Ventes des appareils detecteurs et autres appareils
                                </p>
                                <span>
                                    contact nous sur se numero pour l'achat de appareils<br/>
                                    <a href="tel:083067467" >
                                        <button className="btn btn-danger">+243 832 067 467</button>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="img-box" >
                                <img data-aos="zoom-in" src={Image6} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Chimie-metallurgie
                                </h5>
                                <p>
                                    Proposer par des méthodes de récuperation de minerais par des principes chimiques
                                </p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="img-box" >
                                <img data-aos="zoom-in" src={Image7} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Protection de l'environnement
                                </h5>
                                <p>
                                    réduction de la consommation énergétique, d'eau et papier. meilleure gestion et réduction des déchets.
                                    amélioration de la mobilité durable.
                                    former et responsabiliser le personnel aux questions environnementales.
                                </p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="img-box" >
                                <img data-aos="zoom-in" src={Image8} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Developpement Communautaire
                                </h5>
                                <p>
                                    Initier, Realiser et accompagner des projects sociaux economique au profit des populations environnante
                                </p>
                            </div>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <div className="img-box">
                                <img data-aos="zoom-in" src={Image9} className="img1" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    Clinique Juridique
                                </h5>
                                <p>
                                    La Clinique juridique a pour objet d'offrir un service d'information aux personnes
                                    confrontées à des difficultés d'ordre juridique ou social.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box" style={{ marginBottom: "-150px" }}>
                        {/* <a href="">
                            Read More
                        </a> */}
                    </div>
                </div>
            </section>

        </>
    );
}