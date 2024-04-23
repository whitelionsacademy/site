import React from "react";
import faceimg from '../media/facebook-48.png'
import twittimg from '../media/twitter48.png'
import instaimg from '../media/instagram-94.png'
import youimg from '../media/youtube-48.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function ContactSec(){
    return (
        <div className="contact">
            <div className="contacts">
                
                <div className="contactf divs">
                    <h3 className="text tex">Content</h3><br className="brs" />
                    <p className="Parag"> Our Content section serves as your gateway to all things basketball. 
                    With a diverse array of articles, analysis, tutorials, and features,
                     we aim to cater to the diverse interests and passions of the basketball community. </p>
                    <p className="cont Parag">At WhiteLion Basketball Academy, our Content section is the ultimate destination for basketball enthusiasts seeking a
                     wealth of engaging and informative material.</p>
                </div>
                <div className="contactflex divs">
                <a className="text tex" href="#"><h3>About</h3></a><br />
                    <a className="nav-link" href="#">Home</a><br />
                    <a className="nav-link" href="#">Program</a><br />
                    <a className="nav-link" href="#">Gallery</a><br />
                    <a className="nav-link" href="#">Players</a><br />
                    <a className="nav-link" href="#">Contact</a><br />
                </div>
                <div className="quick divs">
                    <h3 className="text tex">Address</h3><br className="brs" />
                    <p className="Parag">Lagos Nigeria <br />
                    10 Lambo Iasunwo firstgate opp. Laspotech IkoroduNorth, Lagos NG, 100001, Ikorodu.</p>
                </div>
                <div className="icons divs">
                    <h3 className="text tex">Follow Us</h3>
                    <a href="#"><img src={faceimg} className="faceimg" /></a>
                    <a href="#"><img src={twittimg} className="twittimg" /></a>
                    <a href="#"><img src={instaimg} className="instaimg" /></a>
                    <a href="#"><img src={youimg} className="youimg" /></a>
                </div>
            </div>
            <div className="copyright">
                <p>©2023 whiteLions Basketball Academy</p>
            </div>
        </div>    
    );
}

export default ContactSec;