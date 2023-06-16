import React from "react";
import vid from '../media/exp.mp4'
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
                        In this section, we bring you inspiring, emotional, and thought-provoking stories that showcase the
                         transformative power of the game. From heartwarming anecdotes to tales of triumph over adversity, these stories remind us 
                        of the unique human connections and profound impact basketball has on individuals and communities.
                        </p>
                    </div>
                    {/* <div class="strip"></div> */}
                </div>
            </div>
            

        </div>    
    );
}

export default ExperienceSec;