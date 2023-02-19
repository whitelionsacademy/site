import React from "react";
import faceimg from '../media/facebook-48.png'
import twittimg from '../media/twitter48.png'
import instaimg from '../media/instagram-94.png'
import youimg from '../media/youtube-48.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ExperienceSec(){
    return (
        <div class="contact">
            <div class="contacts">
                <div class="contactflex">
                    <h1>CONTACT US</h1>
                    <h3>Lagos Nigeria</h3>
                    <h3>10 Lambo Iasunwo firstgate opp. Laspotech Ikorodu North Lagos NG, 100001, Ikorodu.</h3>
                </div>
                <div class="quick">
                    <h1>Quick Links</h1>
                    <a class="nav-link" href="#">Home</a>
                    <a class="nav-link" href="#">Programme</a>
                    <a class="nav-link" href="#">Gallery</a>
                    <a class="nav-link" href="#">Contact</a>
                </div>
                <div class="icons">
                    <h1>Follow US</h1>
                    <a href="#"><img src={faceimg} className="faceimg" /></a>
                    <a href="#"><img src={twittimg} className="twittimg" /></a>
                    <a href="#"><img src={instaimg} className="instaimg" /></a>
                    <a href="#"><img src={youimg} className="youimg" /></a>
                </div>
            </div>
            <div class="copyright">
                <h2>©2023 whiteLions Basketball Academy</h2>
            </div>
        </div>    
    );
}

export default ExperienceSec;