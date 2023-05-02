import React from "react";
import NavSec from "./NavSec.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function LandingHomeSec(){
    return (
        <div class="landingsec">
            <NavSec/>
            <div className="landingsecmid">
                <h1 className="headertext" >WhiteLions Basketball Academy</h1>
                 <a href="/about"><button id="btn1" class="btn btn-light btn-lg">About us</button></a>
                {/* <button id="btn2" class="btn btn-light btn-lg"> Explore</button> */}
                <img className="landhomeimg"></img>
            </div>

            
        </div>
    )
}

export default LandingHomeSec;