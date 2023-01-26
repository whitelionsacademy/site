import React from "react";
import LandingSec from "./homepage/LandingSec.js"
import ExperienceSec from "./homepage/ExperienceSec.js"
import "./homepage.css"

function Homepage(){
    return (
        <div>
            <LandingSec/>
            <ExperienceSec/>
        </div>    
    );
}

export default Homepage;