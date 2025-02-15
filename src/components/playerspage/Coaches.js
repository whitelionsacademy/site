import React from "react";
import teaimg from '../media/image_co.jpg'
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
                    <span><img src={teaimg} className="teaimg" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src={teaimg} className="teaimg" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                </div>
            </div>
        </div>    
    );
}

export default CoachSec;