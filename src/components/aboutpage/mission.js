import React from "react";
import missimg from '../media/image 3.png'
import visimg from '../media/vis6.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class="missvis">
            <div class="missflex">
                
                <div class="mission">

                    <div class="missionsection">
                        <div class="missionwrt">
                            <h2 class="text tex">Our Mission</h2>
                            <p class="misparag Parag">At WhiteLion Basketball Academy, We train and produce elite basketball players through relentless dedication, cutting-edge training methods, and a culture of excellence. Our academy fosters the development of skills, character, and leadership, empowering athletes to achieve their highest potential on the court and become champions in the game of basketball.</p>
                            <p class="missparag Parag">Through our comprehensive training program, we prioritize technical proficiency, tactical understanding, physical conditioning, and mental resilience. Our experienced coaching staff provides individualized attention and guidance, fostering a growth mindset and instilling core values of discipline, teamwork, and integrity. We aim to create a nurturing and challenging environment that prepares our athletes to excel at the highest levels of competition and succeed in their basketball careers.</p> 
                        </div>

                        <div class="misimge">
                            <img src={missimg} className="rounded missimg" />
                        </div>
                    </div>

                </div>


                <div class="vision">
                    <div class="visionsection">
                        <div class="visionwrt">
                            <h2 class="text tex">Our Vision</h2>
                            <p class="visparag Parag">Our vision is to be recognized globally as the premier destination for training and producing top tier basketball players. We envision a future where our graduates dominate the basketball landscape, competing at the highest levels of professional leagues and representing their countries on international stages. Our academy will be synonymous with unparalleled player development, a culture of integrity and sportsmanship, and a track record of producing well-rounded individuals who become ambassadors for the game.</p>
                            <p class="missparag Parag"> We aspire to be a catalyst for the advancement of the sport, shaping the next generation of basketball superstars through our unwavering commitment to excellence, innovation, and the holistic development of athletes.</p>
                        </div>
                        <div class="vimge">
                            <img src={visimg} className="rounded visimg" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>    
    );
}

export default ExperienceSec;