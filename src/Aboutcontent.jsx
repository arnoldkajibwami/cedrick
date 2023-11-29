import React, { useEffect } from 'react'
import Image2 from "./images/8.png"
import "./about.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutContent() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className="about_section layout_padding">
                <div className="container">
                    <h1 className="about_taital" data-aos="fade-left">Apropos de</h1>
                    <p className="about_text">L'Association B.E.E.P.M. Asbl est une association sans ... fondée en 2000</p>
                    <div className="about_section_2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_image">
                                    <img data-aos="zoom-in" src={Image2} alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-right">
                                <div className="about_taital_main">
                                    <p className="lorem_text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing.
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