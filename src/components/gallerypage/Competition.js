import React from "react";
import img01 from "../../images/image 01.jpg";
import img08 from "../../images/image 08.jpg";
import img0134 from "../../images/image0134.jpg";
import lanimg from "../../images/landimgabout0.jpeg";
import img011 from "../../images/image 011.jpg";
import jouimg from "../../images/journimg.jpeg";
import img010 from "../../images/image 010.jpg";
import img004 from "../../images/image004.jpg";
import landimg from "../../images/landimgabout.jpeg";
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
                            <img src={img01} className="rounded competImg1 gallery-imageco" alt="Team Pict"></img>
                            <img src={img08} className="rounded competImg2 gallery-imageco" alt="Team Pict"></img>
                            <img src={img0134} className="rounded competImg3 gallery-imageco" alt="Team Pict"></img>
                            <img src={lanimg} className="rounded competImg4 gallery-imageco" alt="Team Pict"></img>
                            <img src={img011} className="rounded hunter competImg5 gallery-imageco" alt="Team Pict"></img>
                            <img src={jouimg} className="rounded competImg6 gallery-imageco" alt="Team Pict"></img>
                            <img src={img010} className="rounded competImg7 gallery-imageco" alt="Team Pict"></img>
                            <img src={img004} className="rounded hunter competImg8 gallery-imageco" alt="Team Pict"></img>
                            <img src={landimg} className="rounded competImg9 gallery-imageco" alt="Team Pict"></img>
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