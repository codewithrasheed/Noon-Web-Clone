  import React from "react";
  import Block161 from "../images/Block161.avif";
  import Block162 from "../images/Block162.avif";
  import Block163 from "../images/Block163.avif";
  import Block164 from "../images/Block164.avif";
  import Block165 from "../images/Block165.avif";
  import Block166 from "../images/Block166.avif";
  import Block167 from "../images/Block167.avif";
  import img7 from "../images/img7.png"

  function Block16() {
    return (
      <div className="my-3">
        <div className="container-fluid">
          <div className="row">
          <div className="d-flex justify-content-between" style={{backgroundColor: "white"}}>
            <img className="rounded" src={Block161} />
            <img className="rounded" src={Block162} />
            <img className="rounded" src={Block163} />
            <img className="rounded" src={Block164} />
            <img className="rounded" src={Block165} />
            <img className="rounded" src={Block166} />
            <img className="rounded" src={Block167} />
            </div>
            <img className="my-3" src={img7} width="100%" />
          </div>
        </div>
      </div>
    );
  }

  export default Block16;