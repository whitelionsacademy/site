import React from "react";
import competimg from '../media/image 01.jpg'
import competimg1 from '../media/image 08.jpg'
import competimg2 from '../media/journimg.jpeg'
import competimg3 from '../media/landimgabout0.jpeg'
import competimg4 from '../media/image 011.jpg'
import competimg5 from '../media/image 010.jpg'
import competimg6 from '../media/image0134.jpg'
import competimg7 from '../media/image004.jpg'
import competimg8 from '../media/landimgabout.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function CompetSec() {
    return (
        <div className="compet">
            <div className="competmid">
                <div className="competsec">
                    <div className="competwrt">
                        <h2 className="text tex"> Competition </h2>
                        <p className="competparag Parag">Welcome to the heart of the action in our Competition section, witness the evolution of strategy and skill as athletes push the limits of what's possible. 
                        Stay updated with comprehensive coverage, analysis, and highlights, ensuring you never miss a moment of the thrilling basketball action forefront of competition, where champions are forged and legacies are written.</p>
                    </div>
                    <div className="compimage">
                        <div className="competimge">
                            <img src={competimg} className="rounded competImg1 gallery-imageco" alt="Team Pict"></img>
                            <img src={competimg1} className="rounded competImg2 gallery-imageco" alt="Team Pict"></img>
                            <img src={competimg6} className="rounded competImg3 gallery-imageco" alt="Team Pict"></img>
                            <img src={competimg3} className="rounded competImg4 gallery-imageco" alt="Team Pict"></img>
                            <img src={competimg4} className="rounded hunter competImg5 gallery-imageco" alt="Team Pict"></img>
                            <img src={competimg2} className="rounded competImg6 gallery-imageco" alt="Team Pict"></img>
                            <img src={competimg5} className="rounded competImg7 gallery-imageco" alt="Team Pict"></img>
                            <img src={competimg7} className="rounded hunter competImg8 gallery-imageco" alt="Team Pict"></img>
                            <img src={competimg8} className="rounded competImg9 gallery-imageco" alt="Team Pict"></img>
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
    );
}

export default CompetSec;