import React from "react";
import missimg from '../media/image 3.png'
import visimg from '../media/Rectangle 78.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class="missvis">
            <div class="missflex">
                <div class="mission">
                    <h1>Our Mission</h1>
                    <p class="misparag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum ut voluptates quisquam quidem similique modi impedit. Voluptatem, recusandae, animi corrupti consectetur, 
                    sed maiores consequatur ducimus optio fugit alias itaque? Laboriosam? 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, id adipisci harum suscipit nulla provident tempora error
                    expedita corrupti fugit explicabo nostrum ducimus, non voluptate fugiat in accusamus quia. Placeat?</p> 
                </div>
                <img src={missimg} className="missimg" />
                <div class="vision">
                    <h1>Our Vision</h1>
                    <div class="visionsection">
                        <div class="">
                            <p class="visparag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum ut voluptates quisquam quidem similique modi impedit. Voluptatem, recusandae, animi corrupti consectetur, 
                            sed maiores consequatur ducimus optio fugit alias itaque? Laboriosam? 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia eos esse mollitia qui quidem, non quisquam 
                            alias amet eaque dicta possimus vitae a doloremque error reiciendis sunt beatae omnis!</p>
                        </div>
                        <div class="">
                        <img src={visimg} className="visimg" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>    
    );
}

export default ExperienceSec;