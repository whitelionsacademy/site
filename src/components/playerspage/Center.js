import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function CenterSec(){
    return (
        <div className="center">
            <div className="centersec">
                <div className="centerwrt">
                <h2 className="text tex">Centers</h2>
                <h3 className="tex">Division A</h3>
                </div>
                <div className="centersecmid">
                    <span><img src="landimgabout.jpeg" className=" landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src="landimgabout.jpeg" className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src="landimgabout.jpeg" className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src="landimgabout.jpeg" className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                </div>
                <br/><br/>
                <div className="centerwrt">
                <h3 className="tex">Division B</h3>
                </div>
                <div className="centersecmid">
                    <span><img src="landimgabout.jpeg" className=" landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src="landimgabout.jpeg" className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    
                </div>
            </div>
        </div>    
    );
}

export default CenterSec;