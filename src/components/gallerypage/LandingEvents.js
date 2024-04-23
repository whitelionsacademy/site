import React from "react";
import NavSec from "./NavSec.js"
import landimg1 from '../media/image001.jpg'
import landimg2 from '../media/image002.jpg'
import landimg3 from '../media/landimg.jpeg'
import landimg4 from '../media/image004.jpg'
import landimg5 from '../media/acadmainpic.jpeg'
import landimg6 from '../media/image006.jpg'
import landimg7 from '../media/landimgabout.jpeg'
import landimg8 from '../media/progimg.jpeg'
import landimg9 from '../media/journimg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function EventsSec() {
    return (
        <div className="eventlandingSec">
            <NavSec />
            <div className="eventlanding">
                <div className="eventlandingsecmid">
                    <div className="evelandingsec">
                        <div className="evewrt">
                            <h2 className="text tex"> Events </h2>
                            <h3 className="name text tex1">Prince Championship</h3>
                            <p className="eventparag Parag">Step into the electrifying world of basketball greatness with the Prince Championship Section, your ultimate destination for all things hoops. From heart-stopping buzzer-beaters to awe-inspiring slam dunks, we bring you the highlights, insights, and analysis that define the essence of the game. Whether you're a die-hard fan or a casual observer, prepare to be captivated by the relentless energy of the Prince Championship. Join us as we chronicle the journeys of teams and players vying for glory, providing exclusive interviews and in-depth coverage of every dribble, pass, and shot. Here, every match is a battle for supremacy, and only the strongest emerge victorious. Welcome to the Prince Championship Section, where basketball reigns supreme.</p>
                        </div>
                        <div className="eventlan">
                            <div className="eventlandingsecimge">
                                <img src={landimg1} className="rounded landImg1 gallery-imagela" alt="Team Picture"></img>
                                <img src={landimg2} className="rounded landImg2 gallery-imagela" alt="Team Picture"></img>
                                <img src={landimg6} className="rounded hunter landImg3 gallery-imagela" alt="Team Picture"></img>
                                <img src={landimg4} className="rounded landImg4 gallery-imagela" alt="Team Picture"></img>
                                <img src={landimg5} className="rounded hunter landImg5 gallery-imagela" alt="Team Picture"></img>
                                <img src={landimg3} className="rounded landImg6 gallery-imagela" alt="Team Picture"></img>
                                <img src={landimg7} className="rounded landImg7 gallery-imagela" alt="Team Picture"></img>
                                <img src={landimg8} className="rounded landImg8 gallery-imagela" alt="Team Picture"></img>
                                <img src={landimg9} className="rounded landImg9 gallery-imagela" alt="Team Picture"></img>
                            </div>
                            <div className="popup" id="popup">
                                <span className="close" id="closePopup">&times;</span>
                                <img src="" className="popup-image" id="popupImage" alt="Popup Image"></img>
                                <div className="button-container" id="popup">
                                    <button id="prevBtn">&#10094;</button>
                                    <button id="nextBtn">&#10095;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsSec;