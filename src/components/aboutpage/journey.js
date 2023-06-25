import React from "react";
import journimg from '../media/journimg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class="journ">
            <div class="journflex">
                <div class="journsection">
                    <div class="journey">
                        <h2 class="text tex">Our Journey</h2>
                        <p class="journeyparag Parag">In the realm of our basketball academy, a transformative journey unfurls. Aspiring athletes step onto the court, driven by ambition and an unquenchable thirst for greatness. Through sweat-drenched hours of training, relentless perseverance, and unwavering dedication, they sculpt their skills and character. Their journey shapes them into elite players, destined to leave an indelible mark on the basketball world.</p>
                        
                    </div>
                    <div class="jourimge">
                    <img src={journimg} className="rounded journimg" />
                    </div>
                    <div class="journey">
                        <p class="journeyparag2 Parag">Within the walls of our basketball academy, a remarkable journey unfolds. ambitious athletes arrive, their dreams shining brightly in their eyes, fueled by a burning passion for the game. Through rigorous training, they cultivate their skills, pushing boundaries and overcoming obstacles. Guided by expert coaches, they develop not only as players but as individuals, learning the values of teamwork, discipline, and resilience. Their journey culminates in the emergence of elite players, ready to conquer the court and inspire generations to come.</p>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default ExperienceSec;