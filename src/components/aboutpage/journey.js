import React from "react";
import journimg from '../media/journimg.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function JourneySec(){
    return (
        <div className="journ">
            <div className="journflex">
                <div className="journsection">
                    <div className="journey">
                        <h2 className="text tex">Our Journey</h2>
                        <br />
                        <p className="journeyparag Parag">Embarking on a basketball journey is a transformative experience that shapes the lives of players, coaches,
                         and fans alike. At WhiteLion Basketball Academy, we understand the significance of this journey and aim to capture its essence through our dedicated "Journey"
                          section. Here, we chronicle the stories, struggles, triumphs, and inspirations that accompany the basketball adventure. 
                        Join us as we dive into the captivating tales that make basketball more than just a game.</p>
                        
                    </div>
                    <div className="jourimge">
                    <img src={journimg} className="rounded journimg" alt="Game Picture"/>
                    </div>
                    <div className="journey">
                        <p className="journeyparag2 Parag">The basketball journey is a captivating tapestry of stories, emotions, and memories.
                         At WhiteLion Basketball Academy, our Journey section serves as a platform to honor and share these narratives, celebrating the transformative 
                         power of basketball. Join us as we explore the personal triumphs, community impact, and inspiring moments that make the basketball journey 
                         a profound and unforgettable experience. Let these stories inspire you 
                        to embark on your own basketball journey, ready to make your mark on and off the court.</p>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default JourneySec;