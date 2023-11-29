import React, { useEffect } from "react";
import Team1 from "./images/logo1.png"
import Team2 from "./images/logo1.png"
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {BiLogoInstagram} from "react-icons/bi"
import {BiLogoFacebook} from "react-icons/bi"
import {BiLogoTwitter} from "react-icons/bi"
import {BiLogoLinkedin} from "react-icons/bi"

export default function AboutTeam() {
    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])
    return (
        <>
            <section className="text-center mb-5">
                <div id="team" className="team">
                    <div className="container">

                        <div className="section-header text-center">
                            <h2>Notre Equipe</h2>
                            {/* <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p> */}
                        </div>

                        <div className="row gy-4 mt-2">

                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Team1} className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link to="#"><BiLogoInstagram/></Link>
                                        <Link to="#"><BiLogoFacebook/></Link>
                                        <Link to="#"><BiLogoTwitter/></Link>
                                        <Link to="#"><BiLogoLinkedin/></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>Cedrick</h4>
                                    <h6>Ir de Mines</h6>
                                    <span>Directeur Général</span>
                                </div>
                            </div>
{/* 
                            <div className="col-lg-4 col-md-6 member">
                                <div className="member-img">
                                    <img src={Team2} className="img-fluid" alt="" />
                                    <div className="social">
                                        <Link href="#"><i className="bi bi-twitter"></i></Link>
                                        <Link href="#"><BiLogoFacebook/></Link>
                                        <Link href="#"><BiLogoTwitter/></Link>
                                        <Link href="#"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4>Ingrid BAKULIKIRA DJUMA</h4>
                                    <span>Directeur Administratif et Financier</span>
                                </div>
                            </div> */}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}