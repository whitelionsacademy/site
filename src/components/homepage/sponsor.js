import React from "react";
import img_spons from  '../media/spon_img.jpg';

function Sponsor(){

    return (
    <div class="spons">
        <h2 class="spontext txt1">Sponsor/Donate</h2>
        <div class="sponone">
            <img src={img_spons} class="rounded float-right sponimg"></img>
            <div class="spondiv">
                <p class="stag">
                By becoming a sponsor or making a donation, you have the power to shape the future of basketball and make a meaningful 
                impact in the lives of players, teams, and communities. Whether you choose to sponsor a specific program, make a general 
                donation, or support scholarships, your generosity enables us to provide resources, opportunities, and support that elevate 
                the game we love. Together, let's support the growth, development, and accessibility 
                of basketball, ensuring that its positive influence continues to inspire generations to come.</p>

                <button class="btn btn-outline-secondary" id="sponbutton" type="submit">Support</button>
            </div>
        </div>
        
    </div>)
}

export default Sponsor;