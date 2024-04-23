import React from "react";
import exhimg from '../media/image0137.jpg'
import exhimg01 from '../media/image0135.jpg'
import exhimg02 from '../media/image0140.jpg'
import exhimg03 from '../media/image0138.jpg'
import exhimg04 from '../media/Rectangle 950.jpg'
import exhimg05 from '../media/image0139.jpg'
import exhimg06 from '../media/image0142.jpg'
import exhimg07 from '../media/image 010.jpg'
import exhimg08 from '../media/image0141.jpg'
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
                            <img src={exhimg} className="rounded exhimg1 gallery-imageEx" alt="Team Picture" />
                            <img src={exhimg01} className="rounded exhimg2 gallery-imageEx" alt="Team Picture" />
                            <img src={exhimg02} className="rounded exhimg3 gallery-imageEx" alt="Team Picture" />
                            <img src={exhimg03} className="rounded exhimg4 hunter gallery-imageEx" alt="Team Picture" />
                            <img src={exhimg04} className="rounded exhimg5 gallery-imageEx" alt="Team Picture" />
                            <img src={exhimg05} className="rounded exhimg6 hunter gallery-imageEx" alt="Team Picture" />
                            <img src={exhimg06} className="rounded exhimg7 gallery-imageEx" alt="Team Picture" />
                            <img src={exhimg07} className="rounded exhimg8 gallery-imageEx" alt="Team Picture" />
                            <img src={exhimg08} className="rounded exhimg9 gallery-imageEx" alt="Team Picture" />
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