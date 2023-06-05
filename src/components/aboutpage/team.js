import React from "react";
import teaimg from '../media/image_co.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class = "team">
            <div class="teamflex">
                <div class="teamsection">
                    <div class="teamwrt">
                    <h2 class="text tex">Our Team</h2>
                    <br/>
                        <h3 className="name text tex1">Oyewole Adebiyi John <br />Head Coach</h3>
                        <p class="teamparag Parag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Rerum ut voluptates quisquam quidem similique modi impedit.</p> 
                    </div>
                    <div class="teaimge">
                    <img src={teaimg} className="rounded teaimg"/>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default ExperienceSec;