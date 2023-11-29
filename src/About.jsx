import React from "react";
import WhatsappPop from "./WhatsappPop";
import AboutContent from "./Aboutcontent";
import AboutTeam from "./AboutTeam";

export default function About() {
    return (
        <>
            <WhatsappPop/>
            {/* <div style={{height:"50px"}}></div> */}
            <AboutContent/>
            <AboutTeam/>
        </>
    )
}