import React from "react";
import Block141 from "../images/Block141.avif";
import Block142 from "../images/Block142.avif";
import Block143 from "../images/Block143.avif";
import Block144 from "../images/Block144.avif";
import Block145 from "../images/Block145.avif";
import Block146 from "../images/Block146.avif";
import Block147 from "../images/Block147.avif";
import Block148 from "../images/Block148.avif";

function Block14() {
  return (
    <div>
        <div>
          <img src={Block141} width="100%" />
        </div>
      <div className="container-fluid">
        <div className="row">
        <div className="d-flex justify-content-between" style={{backgroundColor: "#DDDDDD"}}>
          <img className="rounded" src={Block142} width="176px" height="289px" />
          <img className="rounded" src={Block143} width="176px" height="289px" />
          <img className="rounded" src={Block144} width="176px" height="289px" />
          <img className="rounded" src={Block145} width="176px" height="289px" />
          <img className="rounded" src={Block146} width="176px" height="289px" />
          <img className="rounded" src={Block147} width="176px" height="289px" />
          <img className="rounded" src={Block148} width="176px" height="289px" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Block14;
