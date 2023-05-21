import React from "react";
import NavSec from "./NavSec.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";


function LandingHomeSec(){
    return (
        <div class="landingsec">
            <NavSec/>
            <div className="landingsecmid">
                <h1 className="headertext" >WhiteLions Basketball Academy</h1>
                 <Link class="nav-link" to="/"><button id="btn1" class="btn btn-light btn-lg">About us</button></Link>
                {/* <button id="btn2" class="btn btn-light btn-lg"> Explore</button> */}
                <img className="landhomeimg"></img>
            </div>

            
        </div>
    )
}

export default LandingHomeSec;