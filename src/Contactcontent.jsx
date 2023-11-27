import React from 'react';
import './contact.css';
import Map from "./Map";
import { Contactform } from './Contactform';

export default function Contactcontent() {  
    return (
        <>
            <section id="contact" className="contact">

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-center mb-5">Stay In Touch With Us</h3>

                    <div className="row gy-4 mb-5">
                        <div className="col-lg-6 itemRaduis">
                            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-map"></i>
                                <h3>Addresse</h3>
                                <p>DRC / Sud - Kivu </p>
                                <p>Bukavu</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 itemRaduis">
                            <div className="info-item d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-envelope"></i>
                                <h3>Address Mail</h3>
                                <p>beepmasbl1@gmail.com</p>
                                <p style={{color:"white"}}>beepmasbl1@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 itemRaduis">
                            <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-telephone"></i>
                                <h3>Contact</h3>
                                <p>+243 973 679 401</p>
                                <p>+243 817 022 328</p>
                            </div>
                        </div>

                    </div>

                    <div className="row gy-4 mt-1 mb-5">

                        <div className="col-lg-6">
                            {/* <img src="" alt="map" /> */}
                            <Map />
                        </div>

                        <div className="col-lg-6 ">
                                <Contactform/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}