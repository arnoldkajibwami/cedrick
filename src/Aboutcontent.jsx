import React, { useEffect } from 'react'
import Image2 from "./images/8.png"
import Image3 from "./images/17.png"
import Image4 from "./images/plug.png"
import "./about.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutContent() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            {/* <section className="about_section layout_padding ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2 data-aos="flip-left">
                                        Apropos de B.E.E.M.P. Asbl
                                    </h2>
                                    <img src={Image4} alt="plug" />
                                </div>
                                <p data-aos="fade-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit
                                </p>
                               
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="img_container">
                                <div className="img-box b1" data-aos="zoom-out">
                                    <img src={Image2} alt="" />
                                </div>
                                <div className="img-box b2" data-aos="zoom-in">
                                    <img src={Image3} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section> */}

            <div className="about_section layout_padding">
                <div className="container">
                    <h1 className="about_taital" data-aos="fade-left">About B.E.E.M.P. Asbl</h1>
                    <p className="about_text">Favoriser la croissance des entreprises aussi bien locales qu'internationales</p>
                    <div className="about_section_2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_image">
                                    <img data-aos="zoom-in" src={Image2} alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right">
                                <div className="about_taital_main">
                                    <p className="lorem_text ">Nous avons une stratégie à long terme claire, fondée sur notre objectif, notre vision, notre mission et nos valeurs. C'est la base à partir de laquelle nous construisons un avenir pérenne pour l'entreprise
                                        Nous avons une stratégie à long terme claire, fondée sur notre objectif, notre vision, notre mission et nos valeurs. C'est la base à partir de laquelle nous construisons un avenir pérenne pour l'entreprise
                                    </p>
                                    <a href="#team" className='detailboxa' style={{ textDecoration: "none" }} data-aos="fade-up">
                                        Meet our Expert Team
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}