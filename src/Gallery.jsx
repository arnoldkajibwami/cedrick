import React from "react";
import "./galery.css"
import WhatsappPop from "./WhatsappPop";
import Dataitems from "./Dataitems";

export default function Gallery() {
    return (
        <>
            <WhatsappPop />
            <div style={{paddingTop:"100px"}}>
               <h1 className="text-center">Gallery</h1>
            </div>
            <div>
                <section className="gallery_Section ">
                    <div className="box" style={{ marginTop: "100px", marginBottom: "100px" }}>
                        <Dataitems />
                    </div>
                </section>
            </div>
        </>
    )
}
