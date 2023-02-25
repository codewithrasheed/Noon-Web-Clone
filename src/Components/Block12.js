import React from "react";
import Block121 from "../images/Block121.avif";
import Block122 from "../images/Block122.avif";
import Block123 from "../images/Block123.avif";
import Block124 from "../images/Block124.avif";
import Block125 from "../images/Block125.avif";
import Block126 from "../images/Block126.avif";
import Block127 from "../images/Block127.avif";
import Block128 from "../images/Block128.avif";

function Block12() {
  return (
    <div>
        <div>
          <img src={Block121} width="100%" />
        </div>
      <div className="container-fluid">
        <div className="row">
        <div className="d-flex justify-content-between" style={{backgroundColor: "#DDDDDD"}}>
          <img className="rounded" src={Block122} width="176px" height="289px" />
          <img className="rounded" src={Block123} width="176px" height="289px" />
          <img className="rounded" src={Block124} width="176px" height="289px" />
          <img className="rounded" src={Block125} width="176px" height="289px" />
          <img className="rounded" src={Block126} width="176px" height="289px" />
          <img className="rounded" src={Block127} width="176px" height="289px" />
          <img className="rounded" src={Block128} width="176px" height="289px" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Block12;
