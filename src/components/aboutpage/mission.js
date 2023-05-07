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
                            <h2 class="text tex">Our Mission</h2><br />
                            <p class="misparag Parag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum ut voluptates quisquam quidem similique modi impedit. Voluptatem, recusandae, animi corrupti consectetur, 
                            sed maiores consequatur ducimus optio fugit alias itaque? Laboriosam?</p>
                            <p class="missparag Parag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, id adipisci harum suscipit nulla provident tempora error
                            expedita corrupti fugit explicabo nostrum ducimus, non voluptate fugiat in accusamus quia. Placeat?</p> 
                        </div>

                        <div class="misimge">
                            <img src={missimg} className="rounded missimg" />
                        </div>
                    </div>

                </div>


                <div class="vision">
                    <div class="visionsection">
                        <div class="visionwrt">
                            <h2 class="text tex">Our Vision</h2><br />
                            <p class="visparag Parag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum ut voluptates quisquam quidem similique modi impedit. Voluptatem, recusandae, animi corrupti consectetur, 
                            sed maiores consequatur ducimus optio fugit alias itaque? Laboriosam? </p>
                            <p class="missparag Parag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia eos esse mollitia qui quidem, non quisquam 
                            alias amet eaque dicta possimus vitae a doloremque error reiciendis sunt beatae omnis!</p>
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