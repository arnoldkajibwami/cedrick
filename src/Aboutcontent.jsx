import React, { useEffect } from 'react'
import Image2 from "./images/8.png"
import "./about.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'

export default function AboutContent() {

    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])

    const navigate = useNavigate()
    function GotoTeam() {
        window.scrollTo(0, 900)
        navigate("/about")
    }

    return (
        <>
            <div className="about_section layout_padding" >
                <div className="container" data-aos="fade-up">
                    <h1 className="about_taital" >Apropos de</h1>
                    <p className="about_text">L'Entreprise B.E.E.P.M. à été crée en Fevrier 2016 par un groupe de scientifiaue <br />multidiciplinaire local</p>
                    <div className="about_section_2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about_image">
                                    <img data-aos="zoom-in" src={Image2} alt="about" />
                                </div>
                            </div>
                            <div className="col-lg-6" >
                                <div className="about_taital_main">
                                    <p className="lorem_text " data-aos="fade-up">
                                        <span >L'entrepise BEEPM à pour objectif:</span>
                                        <ul>
                                            <li><span style={{ fontWeight: "700" }}>I</span>nitier, Realiser et accompagner des etudes, des recherches et d'autres projects sociaux dans les domaines miniers;</li>
                                            <li><span style={{ fontWeight: "700" }}>S</span>'investir dans des activites de regroupements et de structurations des creuseurs artisanaux en coopératives minieres</li>
                                            <li><span style={{ fontWeight: "700" }}>E</span>ncadrer et fournir des appuis techniques multisectoriels ainsi que autres assistances aux populations avoisinant les sites et les zones d'influences minieres</li>
                                            <li><span style={{ fontWeight: "700" }}>P</span>romouvoir la migration de l'exploitation de l'exploitation minière artisanale vers l'exploitation semi-industriel</li>
                                            <li><span style={{ fontWeight: "700" }}>E</span>ntretenir des relations de coopérations et d'echanges tant nationales qu'internationales</li>
                                        </ul>
                                    </p>
                                    <span onClick={GotoTeam} className='detailboxa mb-5' style={{ textDecoration: "none" }} data-aos="fade-up">
                                        Notre Equipe Technique
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}