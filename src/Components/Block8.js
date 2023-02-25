import React from "react";
import Block81 from '../images/Block82.avif'
function Block8(){
    return(
        <div className="container-fluid">
            <div>
                <img src={Block81} width="100%" />
            </div>
            <div className="py-3 d-flex justify-content-between">
                <h4>Trending Deals in electronics</h4>
                <button className="btn px-2 py-2 border-dark">VIEW ALL</button>
            </div>
        </div>
    )
}

export default Block8;