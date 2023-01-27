import React from "react";
import Sec from "./NavSec.js"
import vid from '../media/exp.mp4'
import expimg from '../media/exp.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class="expsec">
            
            <div class="expheader">
                <h1 class="exptext txt1">Experience</h1>

                <h2 class="exptext txt2">Our story</h2>
            </div>
           
            <div class="expflex">
                
                <div class="embed-responsive embed-responsive-21by9 vids">
                    <iframe class="embed-responsive-item" src={vid}></iframe>
                </div>

                <div class="expdiv">
                    <div class="expcard card">
                        <p id="expparag">
                            Lorem ipsum. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed facilisis 
                            pretium purus eget egestas. Donec at arcu ornare. Sed facilisis pretium purus eget egestas. Donec at arcu ornar 
                            
                        </p>
                    </div>
                    <div class="strip"></div>
                </div>
            </div>
            

        </div>    
    );
}

export default ExperienceSec;