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
                <img src={landimg} className="landimg"></img>
            </div>

            
        </div>
    )
}

export default LandingSec;