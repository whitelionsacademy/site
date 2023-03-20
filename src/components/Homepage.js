import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LandingSec from "./homepage/LandingHomeSec.js"
import ExperienceSec from "./homepage/ExperienceSec.js"
import ProgramSec from "./homepage/ProgramSec.js"
import JoinAcadSec from "./homepage/JoinAcaSec.js"
import "./homepage.css"


function Homepage(){
    return (
        <div>
            <LandingSec/>
            <ExperienceSec/>
            <ProgramSec/>
            <JoinAcadSec/>
        </div>    
    );
}

export default Homepage;