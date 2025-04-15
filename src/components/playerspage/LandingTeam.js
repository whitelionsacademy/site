import React from "react";
import NavSec from "./NavSec.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function LandingTeam() {
    return (
        <div className="tealandingSec">
            <NavSec />
            <div className="teamlandingmid">
                <div className="teamlanding">
                    <div className="teawrt">
                        <h2 className="text tex"> Team </h2>
                    </div>
                    <div className="tealandingsecmid">
                        <span><img src="landimgabout.jpeg" className=" landImgT" alt=""/>
                        <p>Point Guard</p></span>
                        <span><img src="landimgabout.jpeg" className=" landImgT" alt=""/>
                        <p>Shooting Guard</p>
                        </span>
                        <span><img src="landimgabout.jpeg" className=" landImgT" alt=""></img>
                        <p>Power Forward</p>
                        </span>
                        <span><img src="landimgabout.jpeg" className=" landImgT" alt=""></img>
                        <p>Small Forward</p>
                        </span>
                        <span><img src="landimgabout.jpeg" className=" landImgT" alt=""></img>
                        <p>Center</p>
                        </span>
                        <span><img src="landimgabout.jpeg" className=" landImgT" alt=""></img>
                        <p>Coach</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingTeam;