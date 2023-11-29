import React, { useEffect } from "react";
import { BiLogoInstagram } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"
import AOS from 'aos'
import 'aos/dist/aos.css'

import "./footer.css"

export default function Footer() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
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
                                    <a href="">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Tél: +243 973 679 401
                                            <br />
                                            Tél: +243 817 022 328
                                        </span>
                                    </a>
                                    <a href="/">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span style={{ textDecoration: "none", color: "skyblue" }}>
                                            beepm1@gmail.com
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor It uses a dictionary of over 200 Latin words, combined with
                                </p>
                                <div class="footer_social">
                                    <i className='socialnetwork' style={{ marginLeft: "5px" }}><BiLogoInstagram /></i>
                                    <i className='socialnetwork'><BiLogoFacebook /></i>
                                    <i className='socialnetwork'><BiLogoTwitter /></i>
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
            </footer>
        </>
    );
}
