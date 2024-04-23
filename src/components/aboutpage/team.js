import React from "react";
import teaimg from '../media/image_co.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function TeamSec(){
    return (
        <div className = "team">
            <div className="teamflex">
                <div className="teamsection">
                    <div className="teamwrt">
                    <h2 className="text tex">Our Team</h2>
                    <br/>
                        <h3 className="name text tex1">Oyewole Adebiyi John <br />Head Coach</h3>
                        <p className="teamparag Parag">Coach Ade believes in teaching and understanding the fundamental of basketball and disciple can get you to places. He Studied physical and
                         health education at UniverSity of Lagos (UNILAG) and also played for the School team for the love of the game and was the captain for the duration of time he was there. He is now the head coach of Crescent school, Dowen 
                         College, Grange school ikeja and Ass. coach American Intl school. He has been a good impact on players which is because he always specks out of experience with proof of over 30 medals, although 
                         he has stoped playing due to injury but wish to proceed a legacy of producing a good basketballer for the world of basketball and also a formidable team.</p> 
                    </div>
                    <div className="teaimge">
                    <img src={teaimg} className="rounded teaimg" alt="Coach Picture"/>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default TeamSec;