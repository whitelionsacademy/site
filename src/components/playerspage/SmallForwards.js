import React from "react";
import lanimg from "../../images/landimgabout.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function SmallforwSec(){
    return (
        <div className="smallforward">
            <div className="smallforwasec">
                <div className="smallwrt">
                <h2 className="text tex">Small Forwards</h2>
                <h3 className="tex">Division A</h3>
                </div>
                <div className="smallforwasecmid">
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
                <div className="smallwrt">
                <h3 className="tex">Division B</h3>
                </div>
                <div className= "smallforwasecmid">
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

export default SmallforwSec;