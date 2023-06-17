import React from "react";
import progimg from '../media/progimg.jpeg'
import progimg2 from '../media/progimg2.jpeg'
import progimg3 from '../media/progimg3.jpeg'

function ProgramSec(){
    return (
        <div class="progmain">

            <div class="progsubsec">

                <div class="expheader">
                    <h2 class="progtext txt1">Programs</h2>
                    <h3 class="progtext txt2">Trainings</h3>
                </div>

                <div class="progone">

                    <img src={progimg} class="rounded float-right progimg"></img>
                    <div class="progdiv">
                        <p class='ptag'>Every position on the 
                        basketball court demands unique skills and responsibilities. In our training section, we offer position-specific workouts and training 
                        regimens catered to guards, forwards, centers, and more. Whether you want to improve your point guard playmaking abilities or enhance your post moves as a center, our 
                        targeted training resources will help you develop the specialized skills needed to excel in your role.</p>
                        <div class="pstrip"></div>
                    </div>
                    
                </div>

                <div class="progone" id="progonemiddle">

                    <img src={progimg2} class="rounded float-left progimg"></img>
                    <div class="progdiv" id="progdivmiddle">
                        <p class='ptag'>Mastering the fundamental skills is essential for every basketball player. In this section,
                        we break down the core elements of the game, including shooting, dribbling, passing, and defense. Through detailed tutorials, 
                        drills, and practice tips, we guide you in honing these fundamental skills, helping you build a 
                        strong basketball foundation that will serve as a springboard for your overall development.</p>
                        <div class="pstrip"></div>
                    </div>
                    
                </div>

                <div class="progone">

                    <img src={progimg3} class="rounded float-right progimg"></img>
                    <div class="progdiv">
                        <p class='ptag'>We are dedicated to supporting your 
                        journey and helping you reach your full potential on the court. Through comprehensive training guides, position-specific workouts, strength and conditioning 
                        plans, and mental training exercises, we provide the tools and knowledge you need to elevate your skills, enhance your 
                        basketball IQ, and excel in every aspect of the game. Step into the Training Zone and unlock your true basketball potential today.</p>
                        <div class="pstrip"></div>
                    </div>
                    
                </div>


            </div>

        </div>
    )
}

export default ProgramSec;