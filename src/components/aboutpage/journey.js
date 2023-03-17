import React from "react";
import journimg from '../media/image 4.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class="journ">
            <div class="journflex">
                <div class="journey">
                    <h1>Our Journey</h1>
                    <br />
                    <p class="journeyparag">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum ut voluptates quisquam quidem similique modi impedit. Voluptatem, recusandae, animi corrupti consectetur, 
                    sed maiores consequatur ducimus optio fugit alias itaque? Laboriosam? 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, id adipisci harum suscipit nulla provident tempora error
                    expedita corrupti fugit explicabo nostrum ducimus, non voluptate fugiat in accusamus quia. Placeat?</p>
                    
                </div>
                <div class="jourimge">
                <img src={journimg} className="journimg" />
                </div>
                <div class="journey2">
                    <p class="journeyparag2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum ut voluptates quisquam quidem similique modi impedit. Voluptatem, recusandae, animi corrupti consectetur, 
                    sed maiores consequatur ducimus optio fugit alias itaque? Laboriosam? 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia eos esse mollitia qui quidem, non quisquam 
                    alias amet eaque dicta possimus vitae a doloremque error reiciendis sunt beatae omnis!</p>
                </div>

            </div>
        </div>    
    );
}

export default ExperienceSec;