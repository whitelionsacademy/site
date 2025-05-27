import React from "react";
import LandingTeam from "./playerspage/LandingTeam.js"
import Pointguards from "./playerspage/PointGuards.js"
import Shootingguard from "./playerspage/ShootingGuards.js"
import Smallforward from "./playerspage/SmallForwards.js"
import Powerforward from "./playerspage/PowerForwards.js"
import Center from "./playerspage/Center.js"
import Coach from "./playerspage/Coaches.js"
import Contact from "./playerspage/ContactTe.js"
import "./playerspage.css"

function Aboutpage(){
    return (
        <div>
            <LandingTeam/>
            <Pointguards/>
            <Shootingguard/>
            <Smallforward/>
            <Powerforward/>
            <Center/>
            <Coach/>
            <Contact/>
        </div>    
    );
}

export default Aboutpage;