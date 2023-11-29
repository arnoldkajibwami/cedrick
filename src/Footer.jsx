import React, { useEffect } from "react";
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"
import AOS from 'aos'
import 'aos/dist/aos.css'

import "./footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
    useEffect(() => {
        AOS.init({ duration: 2200 })
    }, [])
    return (
        <>
            <footer class="footer_section" data-aos="fade-up">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-col">
                            <div class="footer_contact">
                                <h4>
                                    Contact Nous
                                </h4>
                                <div class="contact_link_box">
                                    <a href="">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Addresse
                                        </span>
                                    </a>
                                    <a href="contact">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Tél: +243 973 679 401
                                        </span>
                                    </a>
                                    <a href="contact">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Tél: +243 973 679 401
                                        </span>
                                        <br />
                                    </a>
                                    <a href="contact">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span style={{ textDecoration: "none", color: "skyblue" }}>
                                            beepmasbl1@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 footer-col">
                            <div class="footer_detail">
                                <a href="" class="footer-logo" style={{ textDecoration: "none" }}>
                                    <span style={{ marginRight: "10px" }}>B.E.E.P.M.</span> <span></span>
                                </a>
                                <p>
                                    L'Entreprise B.E.E.P.M. à été crée en Fevrier 2016 par un groupe de scientifiaue
                                    <br />multidiciplinaire local
                                </p>
                                <div class="footer_social">
                                    <i className='socialnetwork' style={{ marginLeft: "5px" }}> <Link to="/"><BiLogoInstagram /></Link> </i>
                                    <i className='socialnetwork'><Link to=""><BiLogoFacebook /></Link></i>
                                    <i className='socialnetwork'><Link to=""><BiLogoTwitter /></Link></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 footer-col">
                            <h4>
                                Ouvert
                            </h4>
                            <p>
                                Lundi / Samedi
                            </p>
                            <p>
                                8.00 Am - 4.30 Pm
                            </p>
                        </div>
                    </div>
                    <div class="footer-info">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By
                            <a href="/home" style={{ marginLeft: "5px", color: "skyblue", textDecoration: "none" }}>B.E.E.P.M. </a>
                        </p>
                    </div>
                    {/* <div class="footer-info">
                        <p>
                            <span id="displayYear"></span> Made By  
                            <a href="https://auctux.com" style={{marginLeft:"5px"}}>Cedrick</a>
                        </p>
                    </div> */}
                </div>
            </footer >
        </>
    );
}
