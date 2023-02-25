import React from "react";
import Block131 from "../images/Block131.avif";
import Block132 from "../images/Block132.avif";
import Block133 from "../images/Block133.avif";
import Block134 from "../images/Block134.avif";
import Block135 from "../images/Block135.avif";
import Block136 from "../images/Block136.avif";
import Block137 from "../images/Block137.avif";
import Block138 from "../images/Block138.avif";

function Block13() {
  return (
    <div>
        <div>
          <img src={Block131} width="100%" />
        </div>
      <div className="container-fluid">
        <div className="row">
        <div className="d-flex justify-content-between" style={{backgroundColor: "#DDDDDD"}}>
          <img className="rounded" src={Block132} width="176px" height="289px" />
          <img className="rounded" src={Block133} width="176px" height="289px" />
          <img className="rounded" src={Block134} width="176px" height="289px" />
          <img className="rounded" src={Block135} width="176px" height="289px" />
          <img className="rounded" src={Block136} width="176px" height="289px" />
          <img className="rounded" src={Block137} width="176px" height="289px" />
          <img className="rounded" src={Block138} width="176px" height="289px" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Block13;
