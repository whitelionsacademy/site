import React from "react";
import NavSec from "./NavSec.js"
import landimg from '../media/landimg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function LandingSec(){
    return (
        <div class="landingsec">
            <NavSec/>
            <div className="landingsecmid">
                <h1 className="headertext" >WhiteLions Basketball Academy</h1>
                <button id="btn1" class="btn btn-light btn-lg">Explore</button>
                <button id="btn2" class="btn btn-light btn-lg"> Contact us</button>
                <img src={landimg} className="landimg"></img>
            </div>

            
        </div>
    )
}

export default LandingSec;