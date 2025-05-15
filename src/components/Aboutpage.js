import React from "react";
import LandingSec from "./aboutpage/LandingSec.js"
import Mission from "./aboutpage/Mission.js"
import Journey from "./aboutpage/Journey.js"
import Team from "./aboutpage/Team.js"
import Contact from "./aboutpage/Contact.js"
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