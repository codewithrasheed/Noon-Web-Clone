import React from "react";
import Block101 from '../images/Block101.gif'

function Block10(){
    return(
        <div className="container-fluid">
            <div>
                <img src={Block101} width="100%" />
            </div>
            <div className="py-3 d-flex justify-content-between">
                <h4>Clearance deals</h4>
                <button className="btn px-2 py-2 border-dark">VIEW ALL</button>
            </div>
        </div>
    )
}

export default Block10;
