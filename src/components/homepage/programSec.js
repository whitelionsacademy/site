import React from "react";
import progimg from '../media/progimg.jpeg'

function ProgramSec(){
    return (
        <div class="progmain">

            <div class="progsubsec">

                <h2>Programs</h2>
                <h3>Trainings</h3>

                <div class="progone">

                    <img src={progimg} class="rounded float-right progimg"></img>
                    <div class="progdiv">
                        <p>Duis rutrum lacus eu lacus varius commodo. Pellentesque lobortis tellus a lacus dictum molestie. Sed sit amet augue euismod, dictum risus at, vestibulum libero. Vestibulum aliquam arcu sapien, in lacinia erat pharetra sit amet. Sed lacinia libero ante, eget pretium magna tempus in. </p>
                        <div class="strip"></div>
                    </div>
                    
                </div>


            </div>

        </div>
    )
}

export default ProgramSec;