import React from "react";
import t1 from  '../media/t1.jpeg';
import t2 from  '../media/t2.jpeg';
import t3 from  '../media/t3.jpeg';


function Testmionials(){
    return (<div class="testmain">
        <div class="testsub">
            <h2>Testimonials</h2>
            <div class="testone row">

                <div class="testsec col-md-4 col-sm-6 col-xs-12">
                    <img src={t1} class="rounded-circle testimg"></img>
                    <div>
                        <p id="testpg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div></div>
                    </div>
                </div>

                <div class="testsec col-md-4 col-sm-6 col-xs-12">
                    <img src={t2} class="rounded-circle testimg"></img>
                    <div>
                        <p id="testpg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                        <div></div>
                    </div>
                </div>

                <div class="testsec col-md-4 col-sm-6 col-xs-12">
                    <img src={t3} class="rounded-circle testimg"></img>
                    <div>
                        <p id="testpg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div></div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>)
}

export default Testmionials;