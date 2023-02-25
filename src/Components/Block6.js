import React from "react";
import Block61 from '../images/Block61.png';
import Block62 from '../images/Block62.avif';
import Block63 from '../images/Block63.avif';
import Block64 from '../images/Block64.avif';
import Block65 from '../images/Block65.avif';

function Block6(){
    return(
        <div className="py-3" style={{backgroundColor: "#FFF0BE"}}>
        <div className="container-fluid">
            <div>
            <img src={Block61} width="100%"/>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img src={Block62} width="100%" />
                </div>
                <div className="col-md-3">
                    <img src={Block63} width="100%" />
                </div>
                <div className="col-md-3">
                    <img src={Block64} width="100%" />
                </div>
                <div className="col-md-3">
                    <img src={Block65} width="100%" />
                </div>
            </div>
        </div>

        </div>
    )
}

export default Block6;