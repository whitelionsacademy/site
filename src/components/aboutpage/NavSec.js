import React from "react";
import logo from '../media/logo.png';
import { Link } from "react-router-dom";


function NavSec(){

    let width = window.innerWidth;
    if (true) {
        return (
            <div className="navmain">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <img src={logo} className="About-logo" alt="logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active activebd">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item active activebd">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item  active">
                                <a class="nav-link" href="#">Program</a>
                            </li>
                            <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Gallery
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Item</a>
                                    <a class="dropdown-item" href="#">Item</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Item</a>
                                </div>
                            </li>
                            <li class="nav-item  active">
                                <a class="nav-link" href="#">Players</a>
                            </li>
                            <li class="nav-item  active">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            
                        </ul>                
                    </div>

                    <div class="input-group search">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search"></input>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Search</button>
                        </div>
                    </div>
                    
                    </nav>
    
    
            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }

    
}

export default NavSec;