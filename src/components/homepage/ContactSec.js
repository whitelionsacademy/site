import React from "react";
import faceimg from '../media/facebook-48.png'
import twittimg from '../media/twitter48.png'
import instaimg from '../media/instagram-94.png'
import youimg from '../media/youtube-48.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ContactSec(){
    return (
        <div class="contact">
            <div class="contacts">
                <div class="contactf">
                    <h3>Contact</h3><br class="brs" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nulla dolores soluta tenetur omnis.</p>
                    <p class="cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores! Vero reprehenderit tempora aperiam accusantium nihil earum qui, quasi aspernatur, dignissimos culpa quidem corporis, odio id mollitia aliquid pariatur voluptatibus!</p>
                </div>
                <div class="contactflex">
                    <h3>About</h3><br class="brs" />
                    <a class="nav-link" href="#">Home</a><br />
                    <a class="nav-link" href="#">Programme</a><br />
                    <a class="nav-link" href="#">Gallery</a><br />
                    <a class="nav-link" href="#">Contact</a><br />
                </div>
                <div class="quick">
                    <h3>Address</h3><br class="brs" />
                    <p>Lagos Nigeria</p>
                    <p>10 Lambo Iasunwo firstgate opp. Laspotech Ikorodu North Lagos NG, 100001, Ikorodu.</p>
                </div>
                <div class="icons">
                    <h3>Follow Us</h3>
                    <a href="#"><img src={faceimg} className="faceimg" /></a>
                    <a href="#"><img src={twittimg} className="twittimg" /></a>
                    <a href="#"><img src={instaimg} className="instaimg" /></a>
                    <a href="#"><img src={youimg} className="youimg" /></a>
                </div>
            </div>
            <div class="copyright">
                <footer>©2023 whiteLions Basketball Academy</footer>
            </div>
        </div>    
    );
}

export default ContactSec;