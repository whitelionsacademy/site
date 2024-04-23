import React from "react";
import t1 from  '../media/t1.jpeg';
import t2 from  '../media/t2.jpeg';
import t3 from  '../media/t3.jpeg';


function Testmionials(){
    return (<div className="testmain">
        <div className="testsub">
            <h2>Testimonials</h2>
            <div className="testone row">

                <div className="testsec col-md-4 col-sm-6 col-xs-12">
                    <img src={t1} className="rounded-circle testimg" alt=""></img>
                    <div>
                        <p id="testpg">Discover the remarkable journeys of players who have thrived on and off the court. 
                        In this section, we feature testimonials from players who have overcome challenges, achieved their goals,
                        and found personal fulfillment through basketball. Hear about their triumphs, the lessons they've learned, and the impact the game has had on their lives. From high school standouts to professional athletes, their stories serve 
                        as a powerful reminder of the potential for growth and success through basketball.</p>
                        <div></div>
                    </div>
                </div>

                <div className="testsec col-md-4 col-sm-6 col-xs-12">
                    <img src={t2} className="rounded-circle testimg" alt=""></img>
                    <div>
                        <p id="testpg">From player success stories and coaching testimonials to community connections 
                        and youth development, these testimonials exemplify the profound influence of the game on individuals 
                        and communities. Join us in celebrating the transformative power 
                        of basketball through the inspiring voices and experiences shared in this section.</p>
                        <div></div>
                    </div>
                </div>

                <div className="testsec col-md-4 col-sm-6 col-xs-12">
                    <img src={t3} className="rounded-circle testimg" alt=""></img>
                    <div>
                        <p id="testpg">Basketball is a game that inspires and connects people across generations, 
                        cultures, and backgrounds. In this section, we highlight testimonials from individuals whose 
                        lives have been touched by basketball in unique ways. From stories of encountering their basketball 
                        idols to experiencing the thrill of attending live games, these testimonials 
                        capture the magic and inspiration that basketball evokes in fans of all ages.</p>
                        <div></div>
                    </div>
                </div>
            </div>
            

        </div>
    </div>)
}

export default Testmionials;