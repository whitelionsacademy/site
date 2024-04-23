import React from "react";
import logo from '../media/logo.png';
import { Link } from "react-router-dom";


function NavSec(){

    let width = window.innerWidth;
    if (true) {
        return (
            <div className="navmain">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src={logo} className="About-logo" alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active ">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active activebd">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item  active">
                                <a className="nav-link" href="#">Program</a>
                            </li>
                            <li className="nav-item dropdown active ">
                                <Link className="nav-link dropdown-toggle" to="/gallery" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Gallery
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Item</a>
                                    <a className="dropdown-item" href="#">Item</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Item</a>
                                </div>
                            </li>
                            <li className="nav-item  active">
                                <a className="nav-link" href="#">Players</a>
                            </li>
                            <li className="nav-item  active">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            
                        </ul>                
                    </div>

                    <div className="input-group search">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search"></input>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Search</button>
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