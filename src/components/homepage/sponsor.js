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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <button class="btn btn-outline-secondary" id="sponbutton" type="submit">Support</button>
            </div>
        </div>
        
    </div>)
}

export default Sponsor;