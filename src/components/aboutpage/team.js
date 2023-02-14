import React from "react";
import coachimg from '../media/image_co.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class="team">
            <h1>Our Team</h1>
            <div class="teamco">
            <h1 className="name">Oyewole Adebiyi John</h1>
            <h4>Head Coach</h4>
                <p id="teamparag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum ut voluptates quisquam quidem similique modi impedit. 
                Voluptatem, recusandae, animi corrupti consectetur, 
                sed maiores consequatur ducimus optio fugit alias </p> 
            </div>
            <img src={coachimg} className="coachimg" />

            
        </div>    
    );
}

export default ExperienceSec;