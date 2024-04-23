import React from "react";
import missimg from '../media/image 3.png'
import visimg from '../media/vis6.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function MissionSec(){
    return (
        <div className="missvis">
            <div className="missflex">
                
                <div className="mission">

                    <div className="missionsection">
                        <div className="missionwrt">
                            <h2 className="text tex">Our Mission</h2><br />
                            <p className="misparag Parag">At WhiteLion Basketball Academy, we are passionate about basketball and committed to providing fans,
                             players, and enthusiasts with a comprehensive platform dedicated to the game we love.  Our mission is to elevate basketball excellence 
                             by offering engaging content, insightful analysis,
                              and a vibrant community for all who share a deep appreciation for the sport.</p>
                            <p className="missparag Parag">Our mission is to elevate basketball excellence by providing a dynamic platform that informs, engages, 
                            and empowers. We invite you to join our passionate community, explore our vast range of content,
                             and immerse yourself in the world of basketball. Together, let's celebrate the game we love and inspire 
                            the next generation of basketball enthusiasts to achieve greatness on and off the court.</p> 
                        </div>

                        <div className="misimge">
                            <img src={missimg} className="rounded missimg" alt="Game Picture"/>
                        </div>
                    </div>

                </div>


                <div className="vision">
                    <div className="visionsection">
                        <div className="visionwrt">
                            <h2 className="text tex">Our Vision</h2><br />
                            <p className="visparag Parag">At WhiteLion Basketball Academy, we have a clear vision that drives us: to inspire a 
                            global basketball community united by a shared love and passion for the game. Through our platform, we aim to connect fans, 
                            players, and enthusiasts from all corners of the world, fostering a sense of belonging, empowerment, and camaraderie.
                             Our vision guides our efforts as we strive to be the ultimate destination for everything basketball.</p>
                            <p className="missparag Parag">Our vision is to inspire a global basketball community that transcends boundaries, celebrates 
                            diversity, and empowers individuals to reach their full potential. We invite basketball enthusiasts from around the world 
                            to join us on this journey as we strive to create a platform that unites, inspires, and makes a lasting impact. Together,
                             let's write the next chapter of basketball history and inspire generations to come.</p>
                        </div>
                        <div className="vimge">
                            <img src={visimg} className="rounded visimg" alt="Team Picture"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>    
    );
}

export default MissionSec;