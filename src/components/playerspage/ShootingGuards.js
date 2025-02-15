import React from "react";
import landimgt from '../media/landimgabout.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ShootingguarSec(){
    return (
        <div className="shootgua">
            <div className="shootguarsec">
                <div className="shootwrt">
                <h2 className="text tex">Shooting Guards</h2>
                <h3 className="tex">Division A</h3>
                </div>
                <div className="shootguasecmid">
                    <span><img src={landimgt} className=" landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src={landimgt} className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src={landimgt} className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src={landimgt} className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                </div>
                <br/><br/>
                <div className="shootwrt">
                <h3 className="tex">Division B</h3>
                </div>
                <div className="shootguasecmid">
                    <span><img src={landimgt} className=" landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src={landimgt} className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    
                </div>
            </div>
        </div>    
    );
}

export default ShootingguarSec;