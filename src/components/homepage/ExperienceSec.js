import React from "react";
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
                    <iframe class="embed-responsive-item" src={"https://end-sars.s3-us-west-2.amazonaws.com/exp.mp4"}></iframe>
                </div>

                <div class="expdiv">
                    <div class="expcard card">
                        <p id="expparag">
                        As a team, our journey has been an unforgettable rollercoaster of triumphs, challenges, and unbreakable bonds. Through sweat, teamwork, and unwavering determination, we have forged a legacy that will forever live on the court.
                        </p>
                    </div>
                    {/* <div class="strip"></div> */}
                </div>
            </div>
            

        </div>    
    );
}

export default ExperienceSec;