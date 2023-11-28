import React from "react";
import Data from "./Data"
import Items from "./items";

const Dataitems = () => {
    return (
        <>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <div >
                                    <Items
                                        image={item.image}
                                        legend={item.legend}
                                        key={index}
                                    />
                                </div>
                            </>
                        )
                    })}
        </>
    )
}

export default Dataitems;