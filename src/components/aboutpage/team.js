import React from "react";
import coachimg from '../media/image_co.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class = "team">
            <div class="teamflex">
                <h2 class="text tex">Our Team</h2>
                <div class="teamco">
                    <h3 className="name text tex1">Oyewole Adebiyi John <br />Head Coach</h3>
                    <p class="teamparag Parag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum ut voluptates quisquam quidem similique modi impedit.</p> 
                </div>
                <div class="coachimge">
                <img src={coachimg} className="rounded coachimg"/>
                </div>
                
            </div>
        </div>    
    );
}

export default ExperienceSec;