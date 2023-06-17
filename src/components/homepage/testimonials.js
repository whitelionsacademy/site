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
                        <p id="testpg">
                        This basketball academy is a game-changer for aspiring athletes. With its cutting-edge training methods and passionate coaching staff, it's the perfect place to develop skills and chase dreams. Don't miss out on this incredible opportunity!
                            
                        </p>
                        <div></div>
                    </div>
                </div>

                <div class="testsec col-md-4 col-sm-6 col-xs-12">
                    <img src={t2} class="rounded-circle testimg"></img>
                    <div>
                        <p id="testpg">I am excited to endorse this basketball academy as a premier destination for aspiring players. With its top-tier coaching staff and dedication to skill development, this academy is sure to propel young athletes to new heights</p>
                        <div></div>
                    </div>
                </div>

                <div class="testsec col-md-4 col-sm-6 col-xs-12">
                    <img src={t3} class="rounded-circle testimg"></img>
                    <div>
                        <p id="testpg">I wholeheartedly support this basketball academy as a game-changing opportunity for aspiring players. With its focus on skill development, mentorship, and character building, it's the perfect place to nurture talent and shape future basketball stars.</p>
                        <div></div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>)
}

export default Testmionials;