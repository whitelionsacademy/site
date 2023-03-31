import React from "react";
import coachimg from '../media/image_co.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class = "team">
            <div class="teamflex">
                <h1>Our Team</h1>
                <div class="teamco">
                    <h1 className="name">Oyewole Adebiyi John</h1>
                    <h4>Head Coach</h4>
                    <p class="teamparag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum ut voluptates quisquam quidem similique modi impedit.</p> 
                </div>
                <div class="coachimge">
                <img src={coachimg} className="coachimg"/>
                </div>
                
            </div>
        </div>    
    );
}

export default ExperienceSec;