import React from "react";
import LandingSec from "./aboutpage/LandingSec.js"
import Mission from "./aboutpage/mission.js"
import Journey from "./aboutpage/journey.js"
import Team from "./aboutpage/team.js"
import Contact from "./aboutpage/contact.js"
import "./aboutpage.css"

function Aboutpage(){
    return (
        <div>
            <LandingSec/>
            <Mission/>
            <Journey/>
            <Team/>
            <Contact/>
        </div>    
    );
}

export default Aboutpage;