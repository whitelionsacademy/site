import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div className="expsec">
            
            <div className="expheader">
                <h1 className="exptext txt1">Experience</h1>

                <h2 className="exptext txt2">Our story</h2>
            </div>
           
            <div className="expflex">
                
                <div className="embed-responsive embed-responsive-21by9 vids">
                    <iframe className="embed-responsive-item" src={"https://end-sars.s3-us-west-2.amazonaws.com/exp.mp4"} alt="Training video"></iframe>
                </div>

                <div className="expdiv">
                    <div className="expcard card">
                        <p id="expparag">
                        In this section, we bring you inspiring, emotional, and thought-provoking stories that showcase the
                         transformative power of the game. From heartwarming anecdotes to tales of triumph over adversity, these stories remind us 
                        of the unique human connections and profound impact basketball has on individuals and communities.
                        </p>
                    </div>
                    {/* <div className="strip"></div> */}
                </div>
            </div>
            

        </div>    
    );
}

export default ExperienceSec;