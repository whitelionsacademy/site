import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LandingSec from "./homepage/LandingHomeSec.js"
import ExperienceSec from "./homepage/ExperienceSec.js"
import ProgramSec from "./homepage/ProgramSec.js"
import JoinAcadSec from "./homepage/JoinAcaSec.js"
import Sponsor from "./homepage/Sponsor.js"
import Testimonials from "./homepage/Testimonials.js"
import ContactSec from "./homepage/ContactSec.js"
import "./homepage.css"


function Homepage(){
    return (
        <div>
            <LandingSec/>
            <ExperienceSec/>
            <ProgramSec/>
            <JoinAcadSec/>
            <Sponsor/>
            <Testimonials/>
            <ContactSec/>
        </div>    
    );
}

export default Homepage;