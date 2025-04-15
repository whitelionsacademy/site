import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExhibitSec() {
    return (
        <div className="exhibit">
            <div className="exhibitmid">
                <div className="exhibitflex">
                    <div className="exhwrt">
                        <h2 className="text tex">Exhibition</h2>
                        <p className="exhibparag Parag">Step into the Exhibition section, where basketball transcends mere competition, becoming an 
                        art form. Explore the creativity and finesse of the game through dazzling displays of skill and teamwork. From jaw-dropping 
                        trick shots to mesmerizing dribbling exhibitions, immerse yourself in the captivating world of basketball spectacle. Join us as we celebrate the lighter side of the sport, showcasing the joy and passion that make basketball a
                         true spectacle for fans worldwide. Welcome to the Exhibition section, where the game becomes a masterpiece on the court.</p>
                    </div>
                    <div className="exhimage">
                        <div className="exhimge">
                            <img src="image0137.jpg" className="rounded exhimg1 gallery-imageEx" alt="Team pics" />
                            <img src="image0135.jpg" className="rounded exhimg2 gallery-imageEx" alt="Team pics" />
                            <img src="image0140.jpg" className="rounded exhimg3 gallery-imageEx" alt="Team pics" />
                            <img src="image0138.jpg" className="rounded exhimg4 hunter gallery-imageEx" alt="Team pics" />
                            <img src="Rectangle 950.jpg" className="rounded exhimg5 gallery-imageEx" alt="Team pics" />
                            <img src="image0139.jpg" className="rounded exhimg6 hunter gallery-imageEx" alt="Team pics" />
                            <img src="image0142.jpg" className="rounded exhimg7 gallery-imageEx" alt="Team pics" />
                            <img src="image 010.jpg" className="rounded exhimg8 gallery-imageEx" alt="Team pics" />
                            <img src="image0141.jpg" className="rounded exhimg9 gallery-imageEx" alt="Team pics" />
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

export default ExhibitSec;