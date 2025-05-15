import React from "react";
import lanimg from "../../images/landimgabout.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function PowerforSec(){
    return (
        <div className="powerfor">
            <div className="powerforwasec">
                <div className="powerwrt">
                <h2 className="text tex">Power Forwards</h2>
                <h3 className="tex">Division A</h3>
                </div>
                <div className="powerforwarsecmid">
                    <span><img src= {lanimg} className=" landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src= {lanimg} className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src= {lanimg} className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src= {lanimg} className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                </div>
                <br/><br/>
                <div className="powerwrt">
                <h3 className="tex">Division B</h3>
                </div>
                <div className="powerforwarsecmid">
                    <span><img src= {lanimg} className=" landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    <span><img src= {lanimg} className="landImgT" alt=""/>
                    <p className="textPG tex">John Doe</p>
                    </span>
                    
                </div>
            </div>
        </div>    
    );
}

export default PowerforSec;