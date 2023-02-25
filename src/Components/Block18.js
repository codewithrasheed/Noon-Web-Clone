import React from "react";
import Block181 from "../images/Block181.avif";
import Block182 from "../images/Block182.avif";
import Block183 from "../images/Block183.avif";
import Block184 from "../images/Block184.avif";
import Block185 from "../images/Block185.avif";
import Block186 from "../images/Block186.avif";
import Block187 from "../images/Block187.avif";
import img9 from "../images/img9.avif"

function Block18() {
  return (
    <div className="my-3">
      <div className="container-fluid">
        <div className="row">
        <div className="d-flex justify-content-between" style={{backgroundColor: "white"}}>
          <img className="rounded" src={Block181} />
          <img className="rounded" src={Block182} />
          <img className="rounded" src={Block183} />
          <img className="rounded" src={Block184} />
          <img className="rounded" src={Block185} />
          <img className="rounded" src={Block186} />
          <img className="rounded" src={Block187} />
          </div>
          <img className="my-3" src={img9} width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Block18;