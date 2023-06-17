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
                        <h4 className="name tex1">Oyewole Adebiyi John</h4>
                        <h8 className="name tex1">Head Coach</h8>
                        <br></br>
                        <br></br>
                        <p class="teamparag Parag">Coach Ade believes in teaching the fundamentals and practicals of playing basketball. He studied Physical and
                         Health education at UniverSity of Lagos (UNILAG) and also played for the school team for the love of the game, he was the captain for the duration of time he was there. He is now the head coach of Crescent school, Dowen 
                         College, Grange school Ikeja and also the Asst. coach of American Intl school. He has been a good impact on players which is because he always specks out of experience with proof of over 30 medals, although 
                         he has stoped playing due to injury but he's working towards having a legacy of producing a good team of basketballers for the world of basketball.</p> 
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