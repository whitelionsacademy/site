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
                        <p class='ptag'>Duis rutrum lacus eu lacus varius commodo. Pellentesque lobortis tellus a lacus dictum molestie. Sed sit amet augue euismod, dictum risus at, vestibulum libero. Vestibulum aliquam arcu sapien, in lacinia erat pharetra sit amet. Sed lacinia libero ante, eget pretium magna tempus in. </p>
                        <div class="pstrip"></div>
                    </div>
                    
                </div>

                <div class="progone" id="progonemiddle">

                    <img src={progimg2} class="rounded float-left progimg"></img>
                    <div class="progdiv" id="progdivmiddle">
                        <p class='ptag'>Duis rutrum lacus eu lacus varius commodo. Pellentesque lobortis tellus a lacus dictum molestie. Sed sit amet augue euismod, dictum risus at, vestibulum libero. Vestibulum aliquam arcu sapien, in lacinia erat pharetra sit amet. Sed lacinia libero ante, eget pretium magna tempus in. </p>
                        <div class="pstrip"></div>
                    </div>
                    
                </div>

                <div class="progone">

                    <img src={progimg3} class="rounded float-right progimg"></img>
                    <div class="progdiv">
                        <p class='ptag'>Duis rutrum lacus eu lacus varius commodo. Pellentesque lobortis tellus a lacus dictum molestie. Sed sit amet augue euismod, dictum risus at, vestibulum libero. Vestibulum aliquam arcu sapien, in lacinia erat pharetra sit amet. Sed lacinia libero ante, eget pretium magna tempus in. </p>
                        <div class="pstrip"></div>
                    </div>
                    
                </div>


            </div>

        </div>
    )
}

export default ProgramSec;