import React, {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutTeam (){
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return(
        <>
            <section className="text-center mb-5">
                <h1 data-aos="fade-up">Our Team</h1>
            </section>
        </>
    )
}