import React from "react";
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
                            <img src="image 01.jpg" className="rounded competImg1 gallery-imageco" alt="Team Pict"></img>
                            <img src="image 08.jpg" className="rounded competImg2 gallery-imageco" alt="Team Pict"></img>
                            <img src="image0134.jpg" className="rounded competImg3 gallery-imageco" alt="Team Pict"></img>
                            <img src="landimgabout0.jpeg" className="rounded competImg4 gallery-imageco" alt="Team Pict"></img>
                            <img src="image 011.jpg" className="rounded hunter competImg5 gallery-imageco" alt="Team Pict"></img>
                            <img src="journimg.jpeg" className="rounded competImg6 gallery-imageco" alt="Team Pict"></img>
                            <img src="image 010.jpg" className="rounded competImg7 gallery-imageco" alt="Team Pict"></img>
                            <img src="image004.jpg" className="rounded hunter competImg8 gallery-imageco" alt="Team Pict"></img>
                            <img src="landimgabout.jpeg" className="rounded competImg9 gallery-imageco" alt="Team Pict"></img>
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