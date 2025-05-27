import React from "react";
import imgco from "../../images/image_co.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function CoachSec(){
    return (
        <div className="coach">
            <div className="coachsec">
                <div className="coachwrt">
                <h2 className="text tex">Coaches</h2>
                </div>
                <div className="coachsecmid">
                    <span><img src= {imgco} className="teaimg" alt=""/>
                    <p className="textPG tex">Oyewole Adebiyi John</p>
                    </span>
                    <span><img src= {imgco} className="teaimg" alt=""/>
                    <p className="textPG tex">Oyewole Adebiyi John</p>
                    </span>
                </div>
            </div>
        </div>    
    );
}

export default CoachSec;