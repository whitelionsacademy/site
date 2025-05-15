import React from "react";
import NavSec from "./NavSec.js";
import landimg from "../../images/landimgabout.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function LandingSec(){
    return (
        <div className="abtlandingSec">
            <NavSec/>
            <div className="abtlandingsecmid">
                <img src={landimg} className="landImg" alt="Team pics"></img>
            </div>
        </div>
    )
}

export default LandingSec;