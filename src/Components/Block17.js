import React from "react";
import Block171 from "../images/Block171.avif";
import Block172 from "../images/Block172.avif";
import Block173 from "../images/Block173.avif";
import Block174 from "../images/Block174.avif";
import Block175 from "../images/Block175.avif";
import Block176 from "../images/Block176.avif";
import Block177 from "../images/Block177.avif";
import img8 from "../images/img8.png"

function Block17() {
  return (
    <div className="my-3">
      <div className="container-fluid">
        <div className="row">
        <div className="d-flex justify-content-between" style={{backgroundColor: "white"}}>
          <img className="rounded" src={Block171} />
          <img className="rounded" src={Block172} />
          <img className="rounded" src={Block173} />
          <img className="rounded" src={Block174} />
          <img className="rounded" src={Block175} />
          <img className="rounded" src={Block176} />
          <img className="rounded" src={Block177} />
          </div>
          <img className="my-3" src={img8} width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Block17;