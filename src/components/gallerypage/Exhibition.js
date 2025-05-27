import React from "react";
import img0137 from "../../images/image0137.jpg";
import ima0135 from "../../images/image0135.jpg";
import img0140 from "../../images/image0140.jpg";
import img0138 from "../../images/image0138.jpg";
import recimg950 from "../../images/Rectangle 950.jpg";
import img0139 from "../../images/image0139.jpg";
import img0142 from "../../images/image0142.jpg";
import img010 from "../../images/image 010.jpg";
import img0141 from "../../images/image0141.jpg";
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
                            <img src={img0137} className="rounded exhimg1 gallery-imageEx" alt="Team pics" />
                            <img src={ima0135} className="rounded exhimg2 gallery-imageEx" alt="Team pics" />
                            <img src={img0140} className="rounded exhimg3 gallery-imageEx" alt="Team pics" />
                            <img src={img0138} className="rounded exhimg4 hunter gallery-imageEx" alt="Team pics" />
                            <img src={recimg950} className="rounded exhimg5 gallery-imageEx" alt="Team pics" />
                            <img src={img0139} className="rounded exhimg6 hunter gallery-imageEx" alt="Team pics" />
                            <img src={img0142} className="rounded exhimg7 gallery-imageEx" alt="Team pics" />
                            <img src={img010} className="rounded exhimg8 gallery-imageEx" alt="Team pics" />
                            <img src={img0141} className="rounded exhimg9 gallery-imageEx" alt="Team pics" />
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