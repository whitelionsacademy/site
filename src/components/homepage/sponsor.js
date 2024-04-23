import React from "react";
import img_spons from  '../media/spon_img.jpg';

function Sponsor(){

    return (
    <div className="spons">
        <h2 className="spontext txt1">Sponsor/Donate</h2>
        <div className="sponone">
            <img src={img_spons} className="rounded float-right sponimg" alt=""></img>
            <div className="spondiv">
                <p className="stag">
                By becoming a sponsor or making a donation, you have the power to shape the future of basketball and make a meaningful 
                impact in the lives of players, teams, and communities. Whether you choose to sponsor a specific program, make a general 
                donation, or support scholarships, your generosity enables us to provide resources, opportunities, and support that elevate 
                the game we love. Together, let's support the growth, development, and accessibility 
                of basketball, ensuring that its positive influence continues to inspire generations to come.</p>

                <button className="btn btn-outline-secondary" id="sponbutton" type="submit">Support</button>
            </div>
        </div>
        
    </div>)
}

export default Sponsor;