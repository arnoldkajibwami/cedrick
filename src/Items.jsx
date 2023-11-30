import React from "react";
import { useNavigate } from "react-router-dom";

export default function Items(props) {
    return (
        <>
            <div>
                <div className="galleryhover">
                    <div className="boxdetails">
                        <img src={props.image} alt='' />
                        <p className="figureLegnde">{props.legend}</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}


